"use client";

import Navbar from "@/components/front_end/Navbar";
import { Selectgender } from "@/components/front_end/Selectgender";
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
              <Input
                type="text"
                id="firstName"
                placeholder="Enter your First Name"
                className={cn("focus:outline-[#3D408A]")}
              />
            </div>

            <div className="w-full">
              <Label
                htmlFor="LastName"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Last Name
              </Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
                className={cn("focus:outline-[#3D408A]")}
              />
            </div>

            <div className="flex justify-between items-center gap-4 ">
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
              <div>
                <Label
                  htmlFor="Gender"
                  className={cn(" text-violetBlue font-semibold pl-3")}
                >
                  Gender
                </Label>
                <Selectgender />
              </div>
            </div>

            <div className="w-full">
              <Label
                htmlFor="Bus Route"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Bus Route
              </Label>
              <Input
                type="select"
                id="busRoute"
                placeholder="Select Bus Route"
                className={cn("focus:outline-[#3D408A]")}
              />
            </div>

            <div className="w-full">
              <Label
                htmlFor="Area/LandMark Name"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Area/LandMark Name
              </Label>
              <Input
                type="text"
                id="areaLandMarkName"
                placeholder="Enter Area/LandMark Name"
                className={cn("focus:outline-[#3D408A]")}
              />
            </div>

            <div className="w-full">
              <Label
                htmlFor="Location Coordinates"
                className={cn(" text-violetBlue font-semibold pl-3")}
              >
                Location Coordinates
              </Label>
              <Input
                type="text"
                id="locationCoordinates"
                placeholder="Enter Location Coordinates"
                className={cn("focus:outline-[#3D408A]")}
              />
            </div>
          </div>
        </div>
        <div className="sticky flex flex-col bottom-0 justify-center bg-white  items-center w-full min-h-24 z-20">
        <div className="h-2 w-full bg-gradient-to-b from-transparent to-neutral-50"></div>
          <Button
          variant={"blueg"}
          size={"blueg"}
          className={cn(
            "rounded-xl h-[3rem] shadow-2xl text-[1rem]  "
          )}
          >
            <p>Save || Procced</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default setup;
