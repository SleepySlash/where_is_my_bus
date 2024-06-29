"use client";
import Navbar from "@/components/front_end/Navbar";
import { Selectgender } from "@/components/front_end/Selectgender";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { busroute_nos, cn, gender_ } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Kumbh_Sans, Montserrat } from "next/font/google";
import { profileSchema } from "@/lib/schemas";
import { any, set, z } from "zod";
import Image from "next/image";
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
import { useEffect, useState } from "react";

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
      dob: "",
      gender: "",
      routeno: "",
      stopCoordinates: "",
      eveningCoordinates: "",
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log("Hello");
    console.log(values);
  }

  const [user, setUser] = useState(false);
  const [eveningStop, setEveningStop] = useState(false);
  const [iframe, setIframe] = useState(false);
  const [morningIframeValue, setMorningIframeValue] = useState<string | null>(
    null
  );
  const [eveningIframeValue, setEveningIframeValue] = useState<string | null>(
    null
  );
  const [stop, setStop] = useState("");

  useEffect(() => {
    const handleMapForCoordinates = (event: any) => {
      if (event.origin !== window.location.origin) return;

      const data = event.data;

      if (typeof data === "string") {
        const coordinates = data.split(",");
        if (coordinates.length === 2) {
          const lat1 = coordinates[0];
          const lat2 = coordinates[1];
          console.log("Coordinates: ", lat1, lat2);
          setIframe(false);
          if (stop === "stopCoordinates") {
            setMorningIframeValue(data);
            console.log("morning " + morningIframeValue);
          } else if (stop === "eveningCoordinates") {
            setEveningIframeValue(data);
            console.log("evening coordinates" + eveningIframeValue);
          }
        } else {
          console.error("String data does not contain valid coordinates");
        }
      }
    };

    window.addEventListener("message", handleMapForCoordinates);
  }, [eveningIframeValue, form, iframe, morningIframeValue, stop]);

  const scrollToEveningStop = (event: any) => {
    event.preventDefault();
    setEveningStop(true);
    document.getElementById("end")?.scrollIntoView({ behavior: "instant" });
  };

  const removeEveningStop = (event: any) => {
    event.preventDefault();
    setEveningStop(false);
    form.resetField("eveningCoordinates");
  };
  return (
    <>
      <div
        className={`relative flex flex-col font-kumbh_sans ${
          iframe ? "hidden" : ""
        }`}
      >
        <Navbar />

        <div className="flex flex-col justify-between min-h-[93vh] items-center font-bold">
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

                <br />
                <div className="pt-[2rem] w-full flex flex-col items-center justify-center z-20 gap-[1.3rem]">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <div>
                          <FormLabel
                            htmlFor="FirstName"
                            className={cn(
                              " text-violetBlue font-semibold pl-3"
                            )}
                          >
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              id="firstName"
                              placeholder="Enter your First Name"
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
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <div>
                          <FormLabel
                            htmlFor="Last Name"
                            className={cn(
                              " text-violetBlue font-semibold pl-3"
                            )}
                          >
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              id="firstName"
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
                    name="rollno"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <div>
                          <FormLabel
                            htmlFor="Roll No"
                            className={cn(
                              " text-violetBlue font-semibold pl-3"
                            )}
                          >
                            Roll No
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              id="rollno"
                              placeholder="Enter your Roll No"
                              className={cn("focus:outline-[#3D408A]")}
                              {...field}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between items-center gap-4">
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className=" w-full">
                          <div>
                            <FormLabel
                              htmlFor="Date of Birth"
                              className={cn(
                                " text-violetBlue font-semibold pl-3"
                              )}
                            >
                              Date of Birth
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="dob"
                                id="Date of Birth"
                                placeholder="DD/MM/YYYY"
                                className={cn(
                                  "focus:outline-[#3D408A] max-w-full"
                                )}
                                {...field}
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <div>
                            <FormLabel
                              htmlFor="Gender"
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
                                      placeholder="Select Gender"
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
                        <div className="w-full flex flex-col">
                          <FormLabel
                            htmlFor="Bus Route"
                            className={cn(
                              " text-violetBlue font-semibold pl-3 pb-1"
                            )}
                          >
                            Bus Route
                          </FormLabel>
                          <FormControl>
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
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="stopCoordinates"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div>
                          <FormLabel
                            htmlFor="Bus Stop"
                            className={cn(
                              " text-violetBlue font-semibold pl-3"
                            )}
                          >
                            Bus Stop
                          </FormLabel>
                          <FormControl>
                            <div className="w-full justify-between flex relative">
                              <Input
                                type="text"
                                id="stopCoordinates"
                                placeholder="Location Coordinates"
                                className={cn("focus:outline-[#3D408A]")}
                                {...field}
                                value={morningIframeValue}
                              />

                              <Image
                                src={"/myLocation.svg"}
                                alt={"my location"}
                                width={40}
                                height={10}
                                className="mx-5"
                              />

                              <Image
                                src={"/map.svg"}
                                alt={"pick location"}
                                width={38}
                                height={10}
                                className="mx-5"
                                onClick={() => {
                                  setIframe(true);
                                  setStop("stopCoordinates");
                                }}
                              />
                            </div>
                          </FormControl>
                          <div
                            className={`w-full text-sm text-end pt-1 ${
                              !eveningStop ? "" : "hidden"
                            } `}
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
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eveningCoordinates"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div
                          className={` ${!eveningStop ? "hidden" : "w-full"}`}
                        >
                          <FormLabel
                            htmlFor="Evening Stop"
                            className={cn(
                              " text-violetBlue font-semibold pl-3"
                            )}
                          >
                            Evening Stop
                          </FormLabel>
                          <FormControl>
                            <div className="w-full justify-between flex relative">
                              <Input
                                type="text"
                                id="eveningCoordinates"
                                placeholder="Evening Coordinates"
                                className={cn("focus:outline-[#3D408A]")}
                                {...field}
                                value={eveningIframeValue}
                              />

                              <Image
                                src={"/myLocation.svg"}
                                alt={"my location"}
                                width={40}
                                height={10}
                                className="mx-5"
                              />

                              <Image
                                src={"/map.svg"}
                                alt={"pick location"}
                                width={38}
                                height={10}
                                className="mx-5"
                                onClick={() => {
                                  setIframe(true);
                                  setStop("eveningCoordinates ");
                                }}
                              />
                            </div>
                          </FormControl>
                          <div className="w-full text-[#9CA3AF] text-end text-sm pt-1">
                            <span>
                              No Evening stop?{" "}
                              <a
                                href="#"
                                id="end"
                                className="text-violetBlue font-bold underline"
                                onClick={removeEveningStop}
                              >
                                Click to remove
                              </a>
                            </span>
                          </div>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="sticky w-full flex bottom-0 items-center justify-center bg-white min-h-24 z-20">
                {/* <Link href="/" className="flex flex-col w-full px-6"> */}
                <Button
                  type="submit"
                  variant={"blueg"}
                  size={"blueg"}
                  className={cn("rounded-xl h-[3rem] shadow-2xl text-[1rem]")}
                >
                  <p>{user ? "Save" : "Proceed"}</p>
                </Button>
                {/* </Link> */}
              </div>
            </form>
          </Form>
        </div>
      </div>

      {iframe && (
        <div>
          <iframe
            src="/maps/locationpicker.html"
            className={`h-screen w-screen`}
            title="Iframe Example"
          />
        </div>
      )}
    </>
  );
};

export default Setup;
