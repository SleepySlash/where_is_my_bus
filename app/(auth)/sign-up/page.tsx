"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { account, databases, ID } from "@/lib/appwrite";
import { Query } from "appwrite";
import { cn, colleges, gender_ } from "@/lib/utils";
import { OTPSchema } from "@/lib/schemas";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { profileSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const LoginPage = () => {
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
  const form2 = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      pin: "",
    },
  });
  const array = Array.from({ length: 24 });

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
    const handleMapForCoordinates = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.data === "closeMap")
        return;

      const data = event.data;

      if (typeof data === "string") {
        setIframe(false);
        if (stop === "stopCoordinates") {
          setMorningIframeValue(data);
          form.setValue("stopCoordinates", data);
        } else if (stop === "eveningCoordinates") {
          setEveningIframeValue(data);
          form.setValue("eveningCoordinates", data);
        } else {
          console.error("String data does not contain valid coordinates");
        }
      }
    };

    window.addEventListener("message", handleMapForCoordinates);
    return () => {
      window.removeEventListener("message", handleMapForCoordinates);
      // window.addEventListener("message", handleMapForCoordinates);
    };
  }, [stop, form]);

  const scrollToEveningStop = (event: any) => {
    event.preventDefault();
    setEveningStop(true);
    document.getElementById("end")?.scrollIntoView({ behavior: "smooth" });
  };

  const removeEveningStop = (event: any) => {
    event.preventDefault();
    setEveningStop(false);
    setEveningIframeValue("");
    form.setValue("eveningCoordinates", "");
  };

  const getCurrentLocation = (event: any) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError, {
        enableHighAccuracy: true,
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position: any) => {
    const latitude = position.coords.latitude.toFixed(7);
    const longitude = position.coords.longitude.toFixed(7);
    if (stop === "stopCoordinates") {
      setMorningIframeValue("[" + latitude + ", " + longitude + "]");
      form.setValue("stopCoordinates", "[" + latitude + ", " + longitude + "]");
    } else if (stop === "eveningCoordinates") {
      setEveningIframeValue("[" + latitude + ", " + longitude + "]");
      form.setValue(
        "eveningCoordinates",
        "[" + latitude + ", " + longitude + "]"
      );
    } else {
      console.error("String data does not contain valid coordinates");
    }
  };

  function showError(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  const [error, setError] = useState(false);
  const [step, setStep] = useState(3);
  const [mobile, setMobile] = useState("7780416375");
  const [college, setCollege] = useState("mlid");
  // const { user, setUser } = useUser();
  // useEffect(() => {
  //   if (user) {
  //     redirect("/");
  //   }
  // }, [user]);

  // const sendOTP = async () => {
  //   let promise = databases.listDocuments(
  //     process.env.NEXT_PUBLIC_DATABASE_ID!,
  //     process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!,
  //     [Query.equal("Phone", "+91" + mobile)]
  //   );
  //   promise.then(
  //     async function (response) {
  //       if (response.documents.length > 0) {
  //         sendToken();
  //       }
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
  // };

  // const sendToken = async () => {
  //   console.log("+91" + mobile);
  //   try {
  //     const token = await account.createPhoneToken(ID.unique(), "+91" + mobile);
  //     setUserId(token.userId);
  //     console.log("Success");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const login = async () => {
    // await account.createSession(userId, secret);
    try {
      const x = await account.get();
    } catch (error) {
      console.log(error);
    }

    console.log("Logged in");
  };

  const checkStep1 = async () => {
    if (mobile.length !== 10) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid mobile number",
      });
    }

    const user = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!,
      [Query.equal("Phone", "+91" + mobile)]
    );
    if (user.documents.length > 0) {
      setStep(2);
    } else {
      setError(true);
    }
  };

  function checkStep2(values: z.infer<typeof profileSchema>) {
    setStep(3);
  }

  return (
    <div
      className={`w-full min-h-[82vh] font-manrope p-5 bg-white ${
        step == 3 && "bg-yellowDark"
      }`}
    >
      {step === 1 && (
        <div>
          <h1 className="text-4xl text-violetBlue font-bold leading-[3.5rem]">
            Let&apos;s get <br /> started
          </h1>
          <Select onValueChange={setCollege} defaultValue="mlid">
            <SelectTrigger className="w-full p-6 px-7 font-manrope font-medium mt-8 rounded-lg">
              <SelectValue placeholder="Select College" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mlid">MLRIT</SelectItem>
              <SelectItem value="mrit">MLRITM</SelectItem>
              <SelectItem value="iare">IARE</SelectItem>
            </SelectContent>
          </Select>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full rounded-lg border border-violetBlue px-7 py-3 mt-8"
          />
          {error && (
            <div className="border w-full border-red-500 rounded-lg p-5 bg-red-500/20 mt-8">
              <p className=" text-red-500 font-medium">
                You do not have access to the website. Please contact your admin
              </p>
            </div>
          )}
          <div className="fixed bottom-0 right-0 left-0 p-5">
            <p className="font-jua text-violetBlue text-lg pl-5">Step 1/3</p>
            <Button
              variant={"blueg"}
              className="w-full rounded-lg text-lg p-6"
              onClick={checkStep1}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <div className={`${iframe ? "hidden" : ""} `}>
            <h1 className="text-3xl text-violetBlue font-bold">
              Setup Profile
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(checkStep2)}
                className="flex flex-col flex-grow justify-between gap-[1.3rem] pt-5 w-full h-full"
              >
                {/* <div className="pt-[2rem] w-full flex flex-col items-center justify-center z-20 gap-[1.3rem]"> */}
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <div>
                        <FormLabel
                          htmlFor="FirstName"
                          className={cn(" text-violetBlue font-semibold pl-3")}
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
                          className={cn(" text-violetBlue font-semibold pl-3")}
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
                          className={cn(" text-violetBlue font-semibold pl-3")}
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
                        <FormMessage />
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
                          <FormMessage />
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
                                {...field}
                              >
                                <SelectTrigger className="outline-[#3D408A] focus:outline-[#3D408A] h-10 rounded-lg">
                                  <SelectValue
                                    placeholder="Select Gender"
                                    className={cn(
                                      "focus:outline-[#3D408A] outline-[#3D408A]"
                                    )}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {gender_.map((gen) => (
                                      <SelectItem
                                        key={gen.id}
                                        value={gen.name}
                                        className={cn("focus:outline-none")}
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
                              {...field}
                              className={cn(
                                "outline-[#3D408A] focus:outline-[#3D408A] w-full"
                              )}
                            >
                              <SelectValue
                                placeholder="Select Route"
                                className={cn(
                                  "focus:outline-[#3D408A] outline-[#3D408A]"
                                )}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {array.map((_, ind) => (
                                  <SelectItem
                                    key={ind}
                                    value={`${ind + 1}`}
                                    className={cn("focus:outline-none")}
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
                          className={cn(" text-violetBlue font-semibold pl-3")}
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
                            />

                            <Image
                              src={"/myLocation.svg"}
                              alt={"my location"}
                              width={40}
                              height={10}
                              className="mx-5"
                              onClick={(e) => {
                                setStop("stopCoordinates");
                                getCurrentLocation(e);
                              }}
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
                              onClick={(e) => {
                                scrollToEveningStop(e);
                              }}
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
                      <div className={` ${!eveningStop ? "hidden" : "w-full"}`}>
                        <FormLabel
                          htmlFor="Evening Stop"
                          className={cn(" text-violetBlue font-semibold pl-3")}
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
                            />

                            <Image
                              src={"/myLocation.svg"}
                              alt={"my location"}
                              width={40}
                              height={10}
                              className="mx-5"
                              onClick={(e) => {
                                setStop("eveningCoordinates");
                                getCurrentLocation(e);
                              }}
                            />

                            <Image
                              src={"/map.svg"}
                              alt={"pick location"}
                              width={38}
                              height={10}
                              className="mx-5"
                              onClick={() => {
                                setIframe(true);
                                setStop("eveningCoordinates");
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
                              onClick={(e) => {
                                removeEveningStop(e);
                              }}
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
                {/* </div> */}

                <Button
                  type="submit"
                  variant={"blueg"}
                  size={"blueg"}
                  className={cn("rounded-xl h-[3rem] shadow-2xl text-[1rem]")}
                >
                  <p>{user ? "Save" : "Proceed"}</p>
                </Button>

                {/* <div className="sticky w-full flex bottom-0 items-center justify-center bg-white min-h-24 z-20">
                  
                  <Button
                    type="submit"
                    variant={"blueg"}
                    size={"blueg"}
                    className={cn("rounded-xl h-[3rem] shadow-2xl text-[1rem]")}
                  >
                    <p>{user ? "Save" : "Proceed"}</p>
                  </Button>
                  
                </div> */}
              </form>
            </Form>
          </div>

          {iframe && (
            <iframe
              src="/maps/locationpicker.html"
              className={`h-screen w-screen`}
              title="Iframe Example"
            />
          )}
        </div>
      )}
      {step === 3 && (
        <div className="w-full min-h-[81vh] flex flex-col justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Enter OTP</h1>
            <p className="text-[#9CA3AF] text-sm font-semibold mb-7">
              An OTP has been sent to your mobile
            </p>
            <Form {...form2}>
              <form onSubmit={form2.handleSubmit(login)} className="w-full">
                <FormField
                  control={form2.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  className="w-full bg-violetBlue py-3 rounded-lg font-semibold text-white mt-6 text-lg"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
