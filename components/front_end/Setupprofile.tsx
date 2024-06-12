import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Selectgender } from "./Selectgender";
import {Kumbh_Sans, Montserrat} from 'next/font/google';
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
const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});
const montserrat_light = Montserrat({
  weight: '300',
  subsets: ['latin'],
});

const Setupprofile = () => {
  return (
    <div className="grid relative w-full max-w-sm items-center gap-[1.5rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <Label htmlFor="firstname" className={cn("text-[#3D408A] pl-2",kumbh_sans_darker.className)}>
          First Name
        </Label>
        <Input
          type="text"
          id="fname"
          placeholder="Enter your first name"
          className={cn("focus:outline-[#3D408A]",montserrat.className)}
        />
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <Label htmlFor="firstname" className={cn("text-[#3D408A] pl-2",kumbh_sans_darker.className)} >
          Last Name
        </Label>

        <Input
          type="text"
          id="lname"
          placeholder="Enter your last name"
          className={cn("focus:outline-[#3D408A]",montserrat.className)}
        />
      </div>

      <div className="flex justify-between items-center  gap-1">
        <div className="flex flex-col gap-[0.5rem] ">
          <Label htmlFor="firstname" className={cn("text-[#3D408A] pl-2",kumbh_sans_darker.className)}>
            Date of Birth
          </Label>
          <Input
            type="date"
            id="dob"
            placeholder="DD/MM/YYYY"
            className={cn("focus:outline-[#3D408A] font-light ",montserrat_light.className)}
          />
        </div>
        <div className="flex flex-col gap-[0.5rem] ">
          <Label htmlFor="firstname" className={cn("text-[#3D408A] pl-2",kumbh_sans_darker.className)}>
            Gender
          </Label>
          <Selectgender />
        </div>
      </div>

      <div className={cn("flex flex-col top-[8.2rem] relative items-stretch ",kumbh_sans_darker.className)}>
        
        <Link href="/signup/setup/setupnext" className="flex flex-col" >
          <Button
            variant={"blueg"}
            size={"blueg"}
            className={cn("rounded-xl justify-around h-[3rem] shadow-2xl text-[1rem] ")}
          >
            Proceed
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default Setupprofile;
