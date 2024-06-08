import Navbar from "@/components/front_end/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import colleges from "@/lib/utils";
import { SelectCollege } from "@/components/front_end/Selectcolleg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Navbar/>
      <div className="grid relative w-full max-w-sm items-center gap-[1rem]">
        <Label htmlFor="mobilenumber" className=" text-[#3D408A]">
          College Name
        </Label>
        <SelectCollege />
        <Label htmlFor="mobilenumber" className=" text-[#3D408A]">
          Mobile Number
        </Label>
        <Input
          type="number"
          id="email"
          placeholder="Enter Mobile number"
          className="focus:outline-[#3D408A]"
        />
        <div className="flex items-end justify-end right-0">
          <p className="text-sm underline">Send OTP</p>
        </div>
        <Label htmlFor="otp" className=" text-[#3D408A]">
          OTP
        </Label>
        <Input
          type="number"
          id="otp"
          placeholder="Enter OTP"
          className="focus:outline-[#3D408A]"
        />

        <Button variant={"blueg"} size={"blueg"}>
          Sign Up
        </Button>
        <div className="center p-4">
          <p className="text-sm">Are you an Administrator?<span className="text-[#3D408A] underline">Login <Link href="/admin">Here</Link></span></p>
        </div>
      </div>
    </>
  );
}