"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createUserSchema } from "@/lib/schemas";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Navbar from "@/components/front_end/Navbar";
import { ID, databases } from "@/lib/appwrite";
import { useToast } from "@/components/ui/use-toast";

const CreateUser = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      phone: "",
      rollNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof createUserSchema>) {
    console.log("Got here: " + values);
    const promise = databases.createDocument(
      "66726ed900109d1aa8fd",
      "6675050c003a9e8459f2",
      ID.unique(),
      {
        Name: values.name,
        RollNumber: values.rollNumber,
        Phone: "+91" + values.phone,
        Role: "student",
      }
    );
    promise.then(
      function (response) {
        console.log(response);
        toast({
          description: "Form submitted successfully",
        });
      },
      function (error) {
        console.log(error);
      }
    );
    toast({
      description: "Form submitted successfully",
    });
    form.reset();

    // console.log("Typed values: ", values);
  }
  return (
    <div className="">
      <Navbar />
      <div className="w-full min-h-[93vh] flex justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create User</CardTitle>
            <CardDescription>Add new student or teacher</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rollNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll Number</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Create</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateUser;
