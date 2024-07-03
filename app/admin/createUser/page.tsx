"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createFacultySchema, createStudentSchema } from "@/lib/schemas";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Navbar from "@/components/front_end/Navbar";
import { ID, databases } from "@/lib/appwrite";
import { useToast } from "@/components/ui/use-toast";

const CreateUser = () => {
  const { toast } = useToast();
  const studentForm = useForm<z.infer<typeof createStudentSchema>>({
    resolver: zodResolver(createStudentSchema),
    defaultValues: {
      p1Phone: "",
      p2Phone: "",
      phone: "",
      rollNumber: "",
    },
  });

  const facultyForm = useForm<z.infer<typeof createFacultySchema>>({
    resolver: zodResolver(createFacultySchema),
    defaultValues: {
      phone: "",
      rollNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof createStudentSchema>) {
    console.log("Got here: " + values);
    const promise1 = databases.createDocument(
      "66726ed900109d1aa8fd",
      "6675050c003a9e8459f2",
      ID.unique(),
      {
        RollNumber: values.rollNumber,
        Phone: "+91" + values.phone,
        Role: "Student",
      }
    );
    promise1.then(
      function (response) {
        console.log(response);
        // toast({
        //   description: "Form submitted successfully",
        // });
      },
      function (error) {
        console.log(error);
      }
    );

    if (values.p1Phone!.length == 10) {
      const promise2 = databases.createDocument(
        "66726ed900109d1aa8fd",
        "6675050c003a9e8459f2",
        ID.unique(),
        {
          RollNumber: values.rollNumber,
          Phone: "+91" + values.p1Phone,
          Role: "Parent",
        }
      );
      promise2.then(
        function (response) {
          console.log(response);
          // toast({
          //   description: "Form submitted successfully",
          // });
        },
        function (error) {
          console.log(error);
        }
      );
    }

    if (values.p2Phone!.length == 10) {
      const promise3 = databases.createDocument(
        "66726ed900109d1aa8fd",
        "6675050c003a9e8459f2",
        ID.unique(),
        {
          RollNumber: values.rollNumber,
          Phone: "+91" + values.p2Phone,
          Role: "Parent",
        }
      );
      promise3.then(
        function (response) {
          console.log(response);
          // toast({
          //   description: "Form submitted successfully",
          // });
        },
        function (error) {
          console.log(error);
        }
      );
    }

    toast({
      description: "Student is added successfully",
    });
    studentForm.reset();

    // console.log("Typed values: ", values);
  }

  function onSubmitFaculty(values: z.infer<typeof createFacultySchema>) {
    console.log("Got here: " + values);
    const promise1 = databases.createDocument(
      "66726ed900109d1aa8fd",
      "6675050c003a9e8459f2",
      ID.unique(),
      {
        RollNumber: values.rollNumber,
        Phone: "+91" + values.phone,
        Role: "Faculty",
      }
    );
    promise1.then(
      function (response) {
        console.log(response);
        // toast({
        //   description: "Form submitted successfully",
        // });
      },
      function (error) {
        console.log(error);
      }
    );
    toast({
      description: "Faculty is added successfully",
    });
    facultyForm.reset();
  }
  return (
    <div className="">
      <Navbar />
      <div className="w-full min-h-[93vh] flex justify-center items-center bg-yellowDark">
        <Card className="max-w-[500px] w-full m-2 shadow-lg">
          <CardHeader>
            <CardTitle className="md:text-3xl text-2xl font-manrope">
              Create User
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
              </TabsList>
              <TabsContent value="student">
                <Form {...studentForm}>
                  <form
                    onSubmit={studentForm.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <FormField
                      control={studentForm.control}
                      name="rollNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Roll Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter student roll number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={studentForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Mobile</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter student phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={studentForm.control}
                      name="p1Phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent Mobile 1</FormLabel>
                          <FormControl>
                            <Input placeholder="optional" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={studentForm.control}
                      name="p2Phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent Mobile 2</FormLabel>
                          <FormControl>
                            <Input placeholder="optional" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Create
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value="faculty">
                <Form {...facultyForm}>
                  <form
                    onSubmit={facultyForm.handleSubmit(onSubmitFaculty)}
                    className="space-y-5"
                  >
                    <FormField
                      control={facultyForm.control}
                      name="rollNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Roll Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter faculty roll number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={facultyForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter faculty mobile number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Create
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateUser;
