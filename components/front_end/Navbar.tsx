"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import settings from "@/public/settings.svg";

import { Button } from "../ui/button";
import Item from "../ui/Sidebar/Item";
import Social from "../ui/Sidebar/Social";

interface NavbarProps {
  Route?: React.ReactNode;
  BusDetails?: React.ReactNode;
}
const Navbar = ({ Route, BusDetails }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 w-full min-h-[7vh] flex justify-between items-center bg-white py-2 px-5 shadow-md z-1">
        <Link href="/" className="">
          <Image src={logo} alt="logo" className="cursor-pointer h-8 w-8" />
        </Link>

        {/* The Route Details will be sent as a React Component*/}
        <span>{Route}</span>

        <Button
          onClick={() => setOpen(true)}
          className="bg-transparent shadow-none hover:bg-transparent"
        >
          <Image src={settings} alt="settings" className="h-8 w-8" />
        </Button>
      </div>

      {/* When there Route Details sent they have to be rendered as bar below the navbar  */}
      <div
        className={`fixed top-0 right-0 min-h-[101vh] p-5 pr-10 z-10 bg-white min-w-[60vw] flex justify-between flex-col transition-all duration-200 ${
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
          <Item name="Profile" icon="/user_blue.svg" linkto="/" />
          <Item name="Contact Us" icon="/contact.svg" linkto="/" />
          <Item name="Install App" icon="/heart.svg" linkto="/" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="">Change Language</p>
          <div className="border p-3 rounded-lg border-violetBlue">
            <p>English(IND)</p>
          </div>
          <p>Share App</p>
          <p>Suggest a feature</p>
          <p className="text-violetBlue">Follow Us</p>
          <div className="flex gap-3">
            <Social source="/" alt="instagram" icon="/insta.svg" />
            <Social source="/" alt="twitt" icon="/twitt.svg" />
            <Social source="/" alt="browser" icon="/browser.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
