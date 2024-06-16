"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import locate from "@/public/locate.svg";
import manage from "@/public/manage.svg";
import customise from "@/public/customise.svg";
import { Button } from "../ui/button";

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Navbar />
      <div className="min-h-[93vh] z-[-1] flex flex-col gap-2 p-7">
        <div className="overflow-hidden relative">
          <Image
            src={locate}
            alt="locate"
            className=''
          />
          <div className="absolute bottom-6 left-6">
            <Button
              variant={"blueg"}
              className="rounded-full font-kumbh_sans font-semibold text-md shadow-sm shadow-gray-500 py-[26px] w-[200px]"
            >
              Track Buses
            </Button>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <Image
            src={manage}
            alt="manage"
            // className=''
            // width={370}
          />
          <div className="absolute bottom-6 left-6">
            <Button
              variant={"yellog"}
              className="rounded-full font-kumbh_sans font-semibold text-md shadow-xl py-[26px] w-[200px]"
            >
              Manage Users
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={customise}
            alt=""
            // className=''
            // width={370}
          />
          <div className="absolute bottom-4 left-6">
            <Button
              onClick={()=>alert('Settings')}
              variant={"whiteg"}
              className="rounded-full font-kumbh_sans font-semibold text-violetBlue text-md shadow-xl py-[26px] w-[200px]"
            >
              Admin Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
