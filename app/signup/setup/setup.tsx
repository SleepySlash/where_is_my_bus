"use client";

import Navbar from "@/components/front_end/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import React from "react";

const setup = () => {
  return (
    <div className="relative flex flex-col md:hidden font-kumbh_sans">
      <Navbar />

      <div className="flex flex-col justify-between min-h-[93vh] items-center font-bold  ">
        <div className="w-full flex-1 p-[1.5rem]">
          <p className={cn(" font-bold text-[#919191] text-xl")}>
            Account Details
          </p>

          <p className={cn("text-[#3D408A] text-5xl font-bold")}>My Profile</p>

          <br />

          <div className="pt-[2rem] w-full flex flex-col items-center justify-center z-20 gap-[1.3rem]">
            <div className="w-full">
              <Label
                htmlFor="FirstName"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                First Name
              </Label>
              <Input type="text"
                id="firstName"
                placeholder="Enter First Name"
                className={cn("focus:outline-[#3D408A]")}/>
            </div>

            <div className="w-full">
              <Label
                htmlFor="LastName"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Last Name
              </Label>
              <Input type="text"
                id="firstName"
                placeholder="Enter L"
                className={cn("focus:outline-[#3D408A]")}/>
            </div>

            <div className="w-full">
              <Label
                htmlFor="Date of Birth"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Date of Birth
              </Label>
              <Input />

              <Label
                htmlFor="Gender"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Gender
              </Label>
              <Input />
            </div>

            <div className="w-full">
              <Label
                htmlFor="Bus Route"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Bus Route
              </Label>
              <Input />
            </div>

            <div className="w-full">
              <Label
                htmlFor="Area/LandMark Name"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Area/LandMark Name
              </Label>
              <Input />
            </div>

            <div className="w-full">
              <Label
                htmlFor="Location Coordinates"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Location Coordinates
              </Label>
              <Input />
            </div>
          </div>
        </div>
        <div>
          <Button>
            <p>Save || Procced</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default setup;
