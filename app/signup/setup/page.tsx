"use client";

import Navbar from "@/components/front_end/Navbar";
import Setupprofile from "@/components/front_end/Setupprofile";
import { Signup } from "@/components/front_end/Signup";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const page = () => {
  return (
    <div className="grid relative w-full min-h-screen md:hidden">
      <Navbar />
      <div className="flex flex-col w-full items-start mt-[4rem] p-[1.5rem] ">
        <p className=" font-semibold text-[#919191] text-xl">Step 1 of 2</p>
        <p className="text-[#3D408A] text-5xl font-semibold">Setup Profile</p>
        <div className="p-2 pt-[2rem] w-full flex flex-col items-center justify-center z-20">
          <Setupprofile />
        </div>
        {/* <div className="p-2 absolute  flex flex-col items-center justify-center bottom-[100px]"> */}
        <Button
            variant={"blueg"}
            size={"blueg"}
            onClick={() => console.log("Clicked")}
            className="mt-[7rem] w-full "
          >
            Proceed
          </Button>
          
        {/* </div> */}
      </div>
    </div>
  );
};

export default page;
