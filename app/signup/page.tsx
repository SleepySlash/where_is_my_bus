"use client";
import Image from "next/image";
import Navbar from "@/components/front_end/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactSchema, signUpSchema } from "@/lib/schemas";
import Link from "next/link";
import { Selectcollege } from "@/components/front_end/Selectcolleg";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { colleges } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { account } from "@/lib/appwrite";

export default function Home() {
  const login = async ({ userId, secret }: any) => {
    await account.createSession(userId, secret);
    const x = await account.get();
    console.log("Logged in");
  };
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      collegeName: "",
      mobileNumber: "",
      otp: "",
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
  }

  const router = useRouter();
  const [userAdmin, setUserAdmin] = useState(false);

  const [select, setSelect] = useState(false);

  const handleClick = () => {
    if (userAdmin) {
      router.push("/admin/setup");
    } else {
      router.push("/signup/setup");
    }
  };

  return (
    <div className="relative flex flex-col font-kumbh_sans">
      <Navbar />
      <div className="flex flex-col w-full justify-between min-h-[93vh] items-center font-bold  ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col flex-grow justify-between gap-1 w-full h-full"
          >
            <div className="w-full flex-1 p-[1.5rem]">
              <p className={cn(" font-bold text-[#919191] text-xl")}>
                {userAdmin ? "Adminstrator" : " Let's Get Started!"}
              </p>

              <p className={cn("text-[#3D408A] text-5xl font-bold")}>Sign Up</p>

              <div
                className={cn(
                  "pt-[2rem] w-full flex flex-col items-center justify-center z-20 gap-[1.3rem]"
                )}
              >
                <FormField
                  control={form.control}
                  name="collegeName"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <div className="gap-2 w-full">
                        <FormLabel
                          htmlFor="collegeName"
                          className={cn(" text-violetBlue font-semibold pl-3")}
                        >
                          College Name
                        </FormLabel>
                        <FormControl>
                          <div className="w-full">
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                                setSelect(!select);
                              }}
                              defaultValue={field.value}
                            >
                              <SelectTrigger
                                className={cn(
                                  "outline-[#3D408A] focus:outline-[#3D408A] h-10 rounded-lg font-bold",
                                  select ? "text-[#A7A7A7]" : "text-black"
                                )}
                              >
                                <SelectValue
                                  placeholder="Select College"
                                  className={cn(
                                    "focus:outline-[#3D408A] outline-[#3D408A]"
                                  )}
                                  {...field}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {colleges.map((clg) => (
                                    <SelectItem
                                      key={clg.id}
                                      value={clg.name}
                                      className={cn(
                                        "focus:outline-none text-black "
                                      )}
                                    >
                                      {clg.name}
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
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <div className="gap-1 w-full  items-stretch ">
                        <FormLabel
                          htmlFor="mobilenumber"
                          className=" text-[#3D408A] font-semibold pl-3"
                        >
                          Mobile Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="email"
                            placeholder="Enter Mobile number"
                            className={cn("focus:outline-[#3D408A]")}
                            {...field}
                          />
                        </FormControl>

                        <p className="text-sm text-violetBlue font-bold underline text-end">
                          Send OTP
                        </p>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <div className=" w-full -mt-5 ">
                        <FormLabel
                          htmlFor="otp"
                          className=" text-[#3D408A] font-semibold pl-3"
                        >
                          OTP
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            id="otp"
                            placeholder="Enter OTP"
                            className={cn("focus:outline-[#3D408A]")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="w-full  relative">
              <Button
                type="submit"
                variant={"blueg"}
                size={"blueg"}
                className={cn(
                  "rounded-xl h-[3rem] shadow-2xl text-[1rem] w-[90%] mb-5 mx-auto"
                )}
                // onClick={handleClick}
              >
                Next
              </Button>

              <Image
                src={"/Ellipse.svg"}
                alt={"Ellipse"}
                width={767}
                height={10}
                className="w-full object-contain absolute bottom-0 left-0 right-0 z-[-1]"
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
