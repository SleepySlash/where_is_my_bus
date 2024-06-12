import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Selectgender } from "./Selectgender";

const Setupprofile = () => {
  return (
    <div className="grid relative w-full items-center gap-[1.5rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <Label htmlFor="firstname" className=" text-[#3D408A]">
          First Name
        </Label>
        <Input
          type="text"
          id="fname"
          placeholder="Enter your first name"
          className="focus:outline-[#3D408A]"
        />
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <Label htmlFor="firstname" className=" text-[#3D408A]">
          Last Name
        </Label>

        <Input
          type="text"
          id="lname"
          placeholder="Enter your last name"
          className="focus:outline-[#3D408A]"
        />
      </div>

      <div className="flex justify-between items-center  gap-1">
        <div className="flex flex-col gap-[0.5rem] ">
          <Label htmlFor="firstname" className=" text-[#3D408A]">
            Date of Birth
          </Label>
          <Input
            type="date"
            id="dob"
            placeholder="dd/mm/yyyy"
            className="focus:outline-[#3D408A] w-[135px]"
          />
        </div>
        <div className="flex flex-col gap-[0.5rem] ">
          <Label htmlFor="firstname" className=" text-[#3D408A]">
            Gender
          </Label>
          <Selectgender />
        </div>
      </div>

      {/* <Button
        variant={"blueg"}
        size={"blueg"}
        onClick={() => console.log("Clicked")}
        className="mt-[4rem] absolute bottom-[-200px] w-full"
      >
        Proceed
      </Button> */}
    </div>
  );
};

export default Setupprofile;
