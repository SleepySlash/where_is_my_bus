import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn, colleges } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Selectcollege } from "./Selectcolleg";
import { Kumbh_Sans } from 'next/font/google';

const kumbh_sans_darker = Kumbh_Sans({
  weight: '700',
  subsets: ['latin'],
});
const kumbh_sans_lighter = Kumbh_Sans({
  weight: '400',
  subsets: ['latin'], 
});

export function Signup() {
  return (
    <div className={cn("grid w-full max-w-sm items-center gap-[1.25rem] relative min-h-screen")}>
      <div className="right-0 flex flex-col justify-center gap-1">
        <Label htmlFor="collegeName" className={cn(" text-[#3D408A] font-semibold pl-2", kumbh_sans_darker.className)}>
          College Name
        </Label>
        <Selectcollege />
      </div>
      <div className={cn("right-0 flex flex-col gap-1 justify-center", kumbh_sans_darker.className)}>
        <Label htmlFor="mobilenumber" className=" text-[#3D408A] font-semibold pl-2">
          Mobile Number
        </Label>
        <Input
          type="number"
          id="email"
          placeholder="Enter Mobile number"
          className="focus:outline-[#3D408A]"
        />
        <div className="flex flex-row items-end justify-end">
          <p className="text-sm font-bold underline">Send OTP</p>
        </div>
      </div>

      <div className={cn("flex flex-col gap-1", kumbh_sans_darker.className)}>
        <Label htmlFor="otp" className=" text-[#3D408A] font-semibold pl-2">
          OTP
        </Label>
        <Input
          type="number"
          id="otp"
          placeholder="Enter OTP"
          className="focus:outline-[#3D408A]"
        />
      </div>

      <div className={cn("flex flex-col relative top-32", kumbh_sans_darker.className)}>
        <Button
          variant={"blueg"}
          size={"blueg"}
          className={cn("rounded-xl h-[3rem] shadow-2xl text-[1rem]")}
          onClick={() => console.log("Clicked")}
        >
          Sign Up
        </Button>
      </div>

      {/* Adjusted div to be displayed 8 rem above the bottom */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-violetBlue items-center">
        <p className="text-sm font-semibold">
          Are you an Administrator?
          <span className="text-[#3D408A] underline tracking-wide">
            Login <Link href="/admin">Here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
