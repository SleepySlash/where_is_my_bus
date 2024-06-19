"use client";
import Image from "next/image";
import Navbar from "@/components/front_end/Navbar";
import { Kumbh_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import locate from "@/public/locate.svg";
import manage from "@/public/manage.svg";
import customise from "@/public/customise.svg";
const kumbh_sans_darker = Kumbh_Sans({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <Navbar />
        <div className="min-h-[93vh] flex flex-col gap-2 p-7">
          <div className="relative">
            <Image src={locate} alt="locate" className="" />
            <div className="absolute bottom-6 left-6">
              <Button
                variant={"blueg"}
                className="rounded-full font-kumbh_sans font-semibold text-md shadow-sm shadow-gray-500 py-[26px] w-[200px]"
              >
                Track Buses
              </Button>
            </div>
          </div>
          <div className=" relative">
            <Image
              src={manage}
              alt="manage"
              // className=''
              // width={370}
            />
            <div className="absolute bottom-6 left-6 z-[100]">
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
              alt="customise"
              // className=''
              // width={370}
            />
            <div className="absolute z-10 bottom-4 left-6">
              <Button
                variant={"whiteg"}
                className="rounded-full font-kumbh_sans font-semibold text-violetBlue text-md shadow-xl py-[26px] w-[200px] z-1"
              >
                Admin Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
