"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import settings from "@/public/settings.svg";

import { Button } from "../ui/button";
import Item from "../ui/Sidebar/Item";
import Social from "../ui/Sidebar/Social";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { useUser } from "@/providers/AuthProvider";

interface NavbarProps {
  Route?: React.ReactNode;
  BusDetails?: React.ReactNode;
}
const Navbar = ({ Route, BusDetails }: NavbarProps) => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const logout = async () => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }

    router.push("/");
  };

  return (
    <>
      <div className="sticky top-0 z-[100] w-full min-h-[7vh] flex justify-between items-center bg-white py-2 px-5  md:px-10 md:py-5">
        <Link href="/" className="">
          <Image src={logo} alt="logo" className="cursor-pointer h-8 w-8" />
          {/* <h4 className="font-jua text-yellowDark tracking-tighter md:text-2xl">
            Where is my bus?
          </h4> */}
        </Link>

        <span>{Route}</span>

        <div className="flex gap-7 font-manrope font-[700] text-lg items-center text-violetBlue max-md:hidden">
          <Link
            href={"/track"}
            className="scale-100 duration-300 hover:scale-110"
          >
            Track
          </Link>
          <Link
            href={"/contact-us"}
            className="scale-100 duration-300 hover:scale-110"
          >
            Contact Us
          </Link>
          <Link
            href={"/profile"}
            className={`${
              !user && "hidden"
            } scale-100 duration-300 hover:scale-110`}
          >
            Profile
          </Link>
          <button
            onClick={logout}
            className={`${
              !user && "hidden"
            } scale-100 duration-300 hover:scale-110`}
          >
            Log out
          </button>
          <Link
            href={"/sign-in"}
            className={`${
              user && "hidden"
            }scale-100 duration-300 hover:scale-110`}
          >
            Login
          </Link>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-transparent shadow-none hover:bg-transparent p-0 md:hidden"
        >
          <Image src={settings} alt="settings" className="h-8 w-8" />
        </Button>
      </div>

      <div
        className={`fixed top-0 right-0 min-h-[101vh] p-5 pr-10 bg-white min-w-[60vw] flex justify-between flex-col transition-all duration-200 z-[1000] md:hidden ${
          !open ? "translate-x-[100%]" : ""
        }`}
      >
        <Button
          onClick={() => setOpen(false)}
          className="absolute top-1 right-3 cursor-pointer bg-transparent shadow-none hover:bg-transparent"
        >
          <Image
            src={"/close.svg"}
            className="h-4 w-4 "
            alt="close"
            height={10}
            width={10}
          />
        </Button>

        <div>
          <div className="relative">
            <Image
              src={"/main_logo.svg"}
              alt="Main"
              height={1}
              width={1}
              className="w-[7rem] aspect-square "
            />
          </div>
          <Item name="Track" icon="/logo.svg" linkto="/track" />
          <Item name="Profile" icon="/user_blue.svg" linkto="/signup/setup" />
          <Item name="Contact Us" icon="/contact.svg" linkto="/contact-us" />
          <Item name="Install App" icon="/heart.svg" linkto="/" />
          <Button
            onClick={logout}
            className={`${!user && "hidden"} w-full`}
            variant={"outline"}
          >
            Log out
          </Button>
        </div>

        <div className="flex flex-col gap-1 mb-10">
          <p className="">Change Language</p>
          <div className="border p-3 rounded-lg border-violetBlue">
            <p>English(IND)</p>
          </div>
          <p>Share App</p>
          <p>Suggest a feature</p>
          <p className="text-violetBlue">Follow Us</p>
          <div className="flex gap-3">
            <Social source="/" alt="insta" icon="/insta.svg" />
            <Social source="/" alt="twitter" icon="/twitter.svg" />
            <Social source="/" alt="browser" icon="/browser.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
