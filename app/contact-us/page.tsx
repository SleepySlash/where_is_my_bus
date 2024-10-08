"use client";

import Image from "next/image";

import Navbar from "@/components/front_end/Navbar";
import { useToast } from "@/components/ui/use-toast";
import hero from "@/public/hero.svg";

import { contactSchema } from "@/lib/schemas";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ID, databases } from "@/lib/appwrite";

const ContactUs = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    const promise = databases.createDocument(
      "66726ed900109d1aa8fd",
      "66726f27003c233e23c5",
      ID.unique(),
      { Name: values.name, Email: values.email, Message: values.message }
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    toast({
      description: "Form submitted successfully",
    });
    form.reset();

    console.log("Typed values: ", values);
  }
  return (
    <div className="max-h-[100vh] overflow-clip">
      <Navbar />

      <div className="md:flex">
        <Image
          src={hero}
          alt="hero"
          className="object-cover max-md:hidden max-h-[94vh] max-w-[60vw]"
        />
        <div className="mb-3 px-7 md:p-16 pt-4 pb-2 font-kumbh_sans min-h-[90vh] flex flex-col flex-grow md:bg-violetBlue">
          <h2 className="text-2xl text-[#919191] font-semibold">
            Any Queries?
          </h2>
          <h1 className="text-5xl text-violetBlue md:text-yellowDark font-bold mb-10">
            Contact Us
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" flex-grow flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5 flex-grow text-violetBlue">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-yellowDark font-bold text-base translate-y-7">
                        Your Name{" "}
                        <span className="text-red-600 align-super">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="shadcn"
                          {...field}
                          className="md:border-yellowDark border-violetBlue  md:shadow-lg shadow-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-yellowDark font-bold text-base translate-y-7">
                        Email Id
                        <span className="text-red-600 align-super">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email id"
                          {...field}
                          className="md:border-yellowDark border-violetBlue  md:shadow-lg shadow-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-yellowDark font-bold text-base translate-y-7">
                        Message{" "}
                        <span className="text-red-600 align-super">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message here..."
                          {...field}
                          className="border md:border-yellowDark border-violetBlue md:shadow-lg shadow-md bg-white rounded-lg"
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-violetBlue md:bg-yellowDark rounded-xl text-white md:text-violetBlue md:font-semibold p-5 text-lg my-5 md:shadow-lg shadow-md"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
