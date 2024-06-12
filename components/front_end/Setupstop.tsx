import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Selectgender } from "./Selectgender";
import {Kumbh_Sans } from 'next/font/google';
import { cn } from "@/lib/utils";
const kumbh_sans_darker = Kumbh_Sans({
  weight: '700',
  subsets: ['latin'],
});
const kumbh_sans_medium = Kumbh_Sans({
  weight: '600',
  subsets: ['latin'],
});
const kumbh_sans_lighter = Kumbh_Sans({
  weight: '400',
  subsets: ['latin'],
});

const Setupstop = () => {
  return (
    <div className="grid relative w-full max-w-sm items-center gap-[1.25rem]">
      <div className="flex flex-col gap-[0.5rem]  ">
        <Label htmlFor="Route Number" className={cn("text-[#3D408A] pl-2 ",kumbh_sans_darker.className)}>
          Route Number
        </Label>
        <Input
          type="text"
          id="fname"
          placeholder="Select Route"
          className={cn("focus:outline-[#3D408A]",kumbh_sans_medium.className)}
        />
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <Label htmlFor="Area/LandMark Name" className={cn("text-[#3D408A] pl-2 ",kumbh_sans_darker.className)} >
          Last Name
        </Label>

        <Input
          type="text"
          id="lname"
          placeholder="Enter Area/LandMark Name"
          className={cn("focus:outline-[#3D408A]",kumbh_sans_medium.className)}
        />
      </div>

      <div className="flex flex-col gap-[0.5rem]">
        <Label htmlFor="firstname" className={cn("text-[#3D408A] pl-2 ",kumbh_sans_darker.className)} >
          Location Coordinates
        </Label>

        <Input
          type="text"
          id="role"
          placeholder="Enter Location Coordinates"
          className={cn("focus:outline-[#3D408A]",kumbh_sans_medium.className)}
        /> 
        <span className={cn("text-xs font-extralight pl-3",kumbh_sans_lighter.className)}> Check this <Link href='www.gta.com' className="text-xs text-violetBlue underline " >video</Link> to get coordinates</span>
      </div>

      

      <div className={cn("flex flex-col top-[8.25rem] relative items-stretch ",kumbh_sans_darker.className)}>
        
        <Button
          variant={"blueg"}
          size={"blueg"}
          className={cn("rounded-xl justify-around h-[3rem] shadow-2xl text-[1rem] ")}
          onClick={() => console.log("Clicked")}
        >
          Finish
        </Button>


      </div>
    </div>
  );
};

export default Setupstop;
