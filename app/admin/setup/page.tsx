"use client";
import Image from "next/image";
import Navbar from "@/components/front_end/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { adminAccountSchema } from "@/lib/schemas";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Home() {
  const form = useForm<z.infer<typeof adminAccountSchema>>({
    resolver: zodResolver(adminAccountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof adminAccountSchema>) {
    if (values) {
      console.log(values);
      handleClick();
    }
  }

  const router = useRouter();
  const [user, setUser] = useState(false);

  const handleClick = () => {
    router.push("/admin");
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
                Account Details
              </p>

              <p className={cn("text-[#3D408A] text-5xl font-bold")}>
                {user ? "My" : "Setup"} Profile
              </p>

              <div
                className={cn(
                  "pt-[2rem] w-full flex flex-col items-center justify-center z-20 gap-[1.3rem]"
                )}
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <div className="gap-1 w-full">
                        <FormLabel
                          htmlFor="collegeName"
                          className={cn(" text-violetBlue font-semibold pl-3")}
                        >
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="lastNam"
                            placeholder="Enter your Last Name"
                            className={cn("focus:outline-[#3D408A]")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <div className="gap-1 w-full">
                        <FormLabel
                          htmlFor="lastName"
                          className=" text-[#3D408A] font-semibold pl-3"
                        >
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="lastName"
                            placeholder="Enter your Last Name"
                            className={cn("focus:outline-[#3D408A]")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <div className="gap-1 w-full">
                        <FormLabel
                          htmlFor="role"
                          className=" text-[#3D408A] font-semibold pl-3"
                        >
                          Role
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="role"
                            placeholder="Enter your role at Institution"
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
            <div className="w-full items-center flex-1 justify-center relative">
              <div className="w-full flex flex-col  px-[1.5rem] ">
                <Button
                  variant={"blueg"}
                  size={"blueg"}
                  className={cn("rounded-xl h-[3rem] shadow-2xl text-[1rem]")}
                >
                  <p>{user ? "Save" : "Proceed"}</p>
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-[-1]">
                <Image
                  src={"/Ellipse.svg"}
                  alt={"Ellipse"}
                  width={767}
                  height={10}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
