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
      // dob: Date(),
      gender: "",
      routeno: "",
      area: "",
      coordinate: "",
    },
  });
  function onSubmit(values: z.infer<typeof profileSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Hello");
    console.log(values);
  }
  const [user, setUser] = useState(false);
  // const [busno,setBusno]=useState(1);
  return (
    <div className="relative flex flex-col md:hidden font-kumbh_sans">
      <Navbar />

      <div className="flex flex-col justify-between min-h-[93vh] items-center font-bold  ">
        <div className="w-full flex-1 p-[1.5rem]">
          <p className={cn(" font-bold text-[#919191] text-xl")}>
            Account Details
          </p>

          <p className={cn("text-[#3D408A] text-5xl font-bold")}>
            {user ? "My" : "Setup"} Profile
          </p>

          <br />

          <div className="pt-[2rem] z-20 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" flex-grow w-full flex flex-col items-center justify-center "
              >
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-violetBlue font-semibold text-base translate-y-7 pl-3">
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
                      <FormLabel className="text-violetBlue font-semibold text-base translate-y-7 pl-3">
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
                      <FormLabel className="text-violetBlue font-semibold text-base translate-y-7 pl-3">
                        Roll Number{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="roll number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-violetBlue font-semibold text-base translate-y-7 pl-3">
                        Area / Landmark Name{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter area / landmark name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-violetBlue font-semibold text-base translate-y-7 pl-3">
                        Dob{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="yyyy-mm-dd" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <div className="flex justify-between gap-4 w-full ">
                  <div>
                    <Label
                      htmlFor="Date of Birth"
                      className={cn(" text-violetBlue font-semibold pl-3")}
                    >
                      Date of Birth
                    </Label>
                    <Input
                      type="dob"
                      id="Date of Birth"
                      placeholder="DD/MM/YYYY"
                      className={cn("focus:outline-[#3D408A] max-w-full")}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <div className="gap-2 w-full">
                          <FormLabel
                            htmlFor="collegeName"
                            className={cn(
                              " text-violetBlue font-semibold pl-3"
                            )}
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
                                      "focus:outline-[#3D408A] outline-[#3D408A] "
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

                {/* <div className="w-full flex flex-col">
                  <Label
                    htmlFor="Bus Route"
                    className={cn(" text-violetBlue font-semibold pl-3")}
                  >
                    Bus Route
                  </Label>
                  <Select>
                    <SelectTrigger
                      className={cn(
                        "outline-[#3D408A] focus:outline-[#3D408A] w-full"
                      )}
                    >
                      <SelectValue
                        placeholder="Select Route"
                        className={cn(
                          "focus:outline-[#3D408A] outline-[#3D408A]",
                          montserrat_lighter.className
                        )}
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
                </div> */}

                <FormField
                  control={form.control}
                  name="routeno"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <div className="gap-2 w-full">
                        <FormLabel
                          htmlFor="collegeName"
                          className={cn(" text-violetBlue font-semibold pl-3")}
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
                                    "focus:outline-[#3D408A] outline-[#3D408A] "
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

                <Button
                  type="submit"
                  variant={"blueg"}
                  size={"blueg"}
                  className={cn(
                    "rounded-xl h-[3rem] shadow-2xl text-[1rem] w-full"
                  )}
                >
                  <p>{user ? "Save" : "Proceed"}</p>
                </Button>
                {/* </Link> */}
              </form>
            </Form>
          </div>
        </div>
        {/* <div className="sticky w-full flex bottom-0 items-center justify-center bg-white min-h-24 z-20"></div> */}
      </div>
    </div>
  );
};

export default Setup;
