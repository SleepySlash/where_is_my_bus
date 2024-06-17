"use client";
import Image from "next/image";
import Navbar from "@/components/front_end/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Selectcollege } from "@/components/front_end/Selectcolleg";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [user,setUser] = useState(false);

  const handleClick = () => {
    if(user)
      {
        router.push('/admin/setup');
      }
      else
      {
        router.push('/signup/setup');
      }
  }

  return (
    <div className="relative flex flex-col font-kumbh_sans">
      <Navbar />
      <div className="flex flex-col justify-between min-h-[93vh] items-center font-bold  ">
        <div className="w-full flex-1 p-[1.5rem]">
          <p className={cn(" font-bold text-[#919191] text-xl")}>
            { user?"Adminstrator" : " Let's Get Started!" }
          </p>

          <p className={cn("text-[#3D408A] text-5xl font-bold")}>Sign Up</p>

          <div
            className={cn(
              "pt-[2rem] w-full flex flex-col items-center justify-center z-20 gap-[1.3rem]"
            )}
          >
            <div className="gap-1 w-full">
              <Label
                htmlFor="collegeName"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                College Name
              </Label>
              <Selectcollege />
            </div>
            <div className="gap-1 w-full">
              <Label
                htmlFor="mobilenumber"
                className=" text-[#3D408A] font-semibold pl-3"
              >
                Mobile Number
              </Label>
              <Input
                type="text"
                id="email"
                placeholder="Enter Mobile number"
                className={cn("focus:outline-[#3D408A]")}
              />
              <div className="flex flex-row items-end justify-end">
                <p className="text-sm text-violetBlue font-bold underline">
                  Send OTP
                </p>
              </div>
            </div>

            <div className=" w-full -mt-5 ">
              <Label
                htmlFor="otp"
                className=" text-[#3D408A] font-semibold pl-3"
              >
                OTP
              </Label>
              <Input
                type="number"
                id="otp"
                placeholder="Enter OTP"
                className={cn("focus:outline-[#3D408A]")}
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-8 items-center flex-1 justify-center relative">
          <div className="w-full flex flex-col  px-[1.5rem] ">
            <Button
              variant={"blueg"}
              size={"blueg"}
              className={cn(
                "rounded-xl h-[3rem] shadow-2xl text-[1rem]  "
              )}
              onClick={handleClick}
            >
              Sign Up
            </Button>
          </div>

          <div className="flex flex-col items-center pt-2 text-violetBlue">
            <p className="text-sm font-semibold">
              Are you {user?"an Adminstrator":" a Student"}?
              <span className="text-[#3D408A] underline tracking-wide">
                Login <Link href="/signup" onClick={()=>{setUser(!user)}} >Here</Link>
              </span>
            </p>
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

        {/* <button type="button" className="h-auto cursor-pointer" onClick={()=>console.log('CLicked')}>sendotp</button> */}
      </div>
    </div>
  );
}