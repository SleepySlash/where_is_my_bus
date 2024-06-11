"use client";
import Image from "next/image";
import Navbar from "@/components/front_end/Navbar";
import { Signup } from "@/components/front_end/Signup";
import { Kumbh_Sans } from 'next/font/google';
import { cn } from "@/lib/utils";

const kumbh_sans_darker = Kumbh_Sans({
  weight: '700',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Navbar />
    <div className="relative flex flex-col min-h-screen md:hidden">
      <div className="flex flex-col items-start mt-[4rem] p-[1.5rem] w-full flex-grow">
        <p className={cn("font-semibold text-[#919191] text-xl", kumbh_sans_darker.className)}>
          Let{"'"}s Get Started!
        </p>
        <p className={cn("text-[#3D408A] text-5xl font-semibold", kumbh_sans_darker.className)}>
          Sign Up
        </p>

        <div className={cn("p-2 pt-[2rem] w-full flex items-center justify-center z-20")}>
          <Signup />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <Image
          src={"/Ellipse.svg"}
          alt={"Ellipse"}
          layout="responsive"
          width={767}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </div>
    </>
  );
}
