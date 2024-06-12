import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {colleges} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Selectcollege } from "./Selectcolleg";

export function Signup() {
  return (
    <div className="grid relative w-full  items-center gap-[1rem]">
      <Label htmlFor="mobilenumber" className=" text-[#3D408A]">
        College Name
      </Label>
      <Selectcollege />
      <Label htmlFor="mobilenumber" className=" text-[#3D408A]">
        Mobile Number
      </Label>
      <Input
        type="number"
        id="email"
        placeholder="Enter Mobile number"
        className="focus:outline-[#3D408A]"
      />
      <div className="right-0 flex items-end justify-end">
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

      <Button
        variant={"blueg"}
        size={"blueg"}
        onClick={() => console.log("Clicked")}
      >
        Sign Up
      </Button>
      <div className="p-4 center">
        <p className="text-sm">
          Are you an Administrator?
          <span className="text-[#3D408A] underline">
            Login <Link href="/admin">Here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}