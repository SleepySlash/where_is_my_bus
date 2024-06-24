"use client";
import Navbar from "@/components/front_end/Navbar";
import { Selectgender } from "@/components/front_end/Selectgender";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { busroute_nos, cn, gender_ } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Kumbh_Sans, Montserrat } from "next/font/google";
import { profileSchema } from "@/lib/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

const montserrat_lighter = Kumbh_Sans({
  weight: "400",
  subsets: ["latin"],
});

const array = Array.from({ length: 24 });

const Setup = () => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      rollno: "",
      //@ts-ignore
      dob: "",
      gender: "",
      routeno: "",
      area: "",
      eveningCoordinate: "",
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log("Hello");
    console.log(values);
  }

  const [user, setUser] = useState(false);
  const [eveningStop, setEveningStop] = useState(false);

  const scrollToEveningStop = (event: any) => {
    event.preventDefault();
    setEveningStop(true);
    document.getElementById("end")?.scrollIntoView({ behavior: "instant" });
  };

  const removeEveningStop = (event: any) => {
    event.preventDefault();
    setEveningStop(false);
    form.resetField("eveningCoordinate");
  };

  return (
    <div className="relative flex flex-col font-kumbh_sans">
      <Navbar />

      <div className="flex flex-col justify-between min-h-[93vh] items-center font-bold">
        <div className="w-full flex-1 p-[1.5rem]">
          <p className={cn(" font-bold text-[#919191] text-xl")}>
            Account Details
          </p>

          <p className={cn("text-[#3D408A] text-5xl font-bold")}>
            {user ? "My" : "Setup"} Profile
          </p>

          <br />

          <div className="pt-[2rem] z-20">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex-grow w-full flex flex-col items-center justify-center gap-1"
              >
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-violetBlue font-semibold pl-3">
                        First Name{" "}
                        <span className="text-red-600 align-super">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-violetBlue font-semibold pl-3">
                        Last Name{" "}
                        <span className="text-red-600 align-super">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rollno"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-violetBlue font-semibold pl-3">
                        Roll Number{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="roll number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between gap-4 w-full">
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-violetBlue font-semibold pl-3">
                          Dob
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="dd/mm/yyyy" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="gap-2 w-full">
                          <FormLabel
                            htmlFor="collegeName"
                            className={cn("text-violetBlue font-semibold pl-3")}
                          >
                            Gender
                          </FormLabel>
                          <FormControl>
                            <div className="w-full">
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="outline-[#3D408A] focus:outline-[#3D408A] h-10 rounded-lg">
                                  <SelectValue
                                    placeholder="select gender"
                                    className={cn(
                                      "focus:outline-[#3D408A] outline-[#3D408A]"
                                    )}
                                    {...field}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {gender_.map((gen) => (
                                      <SelectItem
                                        key={gen.id}
                                        value={gen.name}
                                        className={cn(
                                          "focus:outline-none",
                                          montserrat.className
                                        )}
                                      >
                                        {gen.name}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="routeno"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <div className="gap-2 w-full">
                        <FormLabel
                          htmlFor="collegeName"
                          className={cn("text-violetBlue font-semibold pl-3")}
                        >
                          Route Number
                        </FormLabel>
                        <FormControl>
                          <div className="w-full">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="outline-[#3D408A] focus:outline-[#3D408A] h-10 rounded-lg">
                                <SelectValue
                                  placeholder="Select Route"
                                  className={cn(
                                    "focus:outline-[#3D408A] outline-[#3D408A]"
                                  )}
                                  {...field}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {array.map((_, ind) => (
                                    <SelectItem
                                      key={ind}
                                      value={`${ind + 1}`}
                                      className={cn(
                                        "focus:outline-none",
                                        montserrat.className
                                      )}
                                    >
                                      Route No {ind + 1}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="coordinate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-violetBlue font-semibold pl-3">
                        Enter coordinate
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="0.000.1111" {...field} />
                      </FormControl>
                      <div
                        className={`w-full text-sm text-end ${
                          !eveningStop ? "" : "hidden"
                        }`}
                      >
                        <span className="text-[#9CA3AF]">
                          Is your Evening Stop different?{" "}
                          <a
                            href="#end"
                            className="bg-transparent text-violetBlue font-bold underline"
                            onClick={scrollToEveningStop}
                          >
                            Click me
                          </a>
                        </span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eveningCoordinate"
                  render={({ field }) => (
                    <FormItem
                      className={`w-full ${eveningStop ? "" : "hidden"}`}
                      id="end"
                    >
                      <FormLabel className="text-violetBlue font-semibold pl-3">
                        Evening Coordinate
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="0.000.1111" {...field} />
                      </FormControl>
                      <div className="w-full text-sm text-end">
                        <span className="text-[#9CA3AF]">
                          Is your Evening Stop the same?{" "}
                          <a
                            href="#"
                            className="bg-transparent text-violetBlue font-bold underline"
                            onClick={removeEveningStop}
                          >
                            Click me
                          </a>
                        </span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-8 w-full">
                  <Button
                    type="submit"
                    className="bg-violetBlue w-full h-10 rounded-lg text-base"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <p className={cn("font-light text-[#979797] text-[12px]")}>
            Copyright © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setup;
