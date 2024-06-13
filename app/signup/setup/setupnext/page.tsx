"use client";

import Navbar from "@/components/front_end/Navbar";
import Setupprofile from "@/components/front_end/Setupprofile";
import Image from "next/image";
import {Kumbh_Sans } from 'next/font/google';
import { cn } from "@/lib/utils";
import Setupstop from "@/components/front_end/Setupstop";
const kumbh_sans_darker = Kumbh_Sans({
  weight: '700',
  subsets: ['latin'],
});

const page = () => {
  return (
    <div className={cn("relative flex flex-col min-h-screen md:hidden")}>
      <Navbar />
      <div className="flex flex-col items-start mt-[4rem] p-[1.5rem] ">
        <p className={cn(" font-semibold text-[#919191] text-2xl",kumbh_sans_darker.className)}>Step 2 of 2</p>
        <p className={cn("text-[#3D408A]  text-[2.6rem] tracking-wide font-semibold",kumbh_sans_darker.className)}>Setup Stop</p>
        <div className="p-2 pt-[2rem] w-full flex items-center justify-center z-20">
          <Setupstop />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <Image src={"/Ellipse.svg"} alt={"Ellipse"} width={767} height={10} />
        </div>
      </div>
    </div>
  );
};

export default page;