import Navbar from "@/components/front_end/Navbar";
import React from "react";
import Image from "next/image";
import UserComponent from "@/components/front_end/Admin/UserComponent";
import Link from "next/link";

const BusSelection = () => {
  const phones = ["1234567890", "1234567890", "1234567890"];

  return (
    <div className="h-[100vh] w-[100vw] font-manrope text-violetBlue mx-auto">
      <Navbar />
      <div>
        <div className="flex justify-between items-center px-5 py-2">
          <Image
            src={"/refresh.svg"}
            alt="back"
            height={5}
            width={5}
            className="h-7 w-7"
          />
          <h1 className="text-2xl font-semibold text-center mt-1">Users</h1>
          <Link href={"/admin/createUser"}>
            <Image
              src={"/pen.svg"}
              alt="back"
              height={15}
              width={15}
              className="h-7 w-7"
            />
          </Link>
        </div>

        <div className="h-[1px]  bg-violetBlue w-full" />
        <div className="mt-5  px-5">
          <h3 className="text-gray-400">Showing results for</h3>
          <h1 className="font-semibold text-2xl">
            MLR Institute of Technology
          </h1>
          <div className="h-[1px] mt-3 bg-violetBlue w-full" />
          <h3 className="text-gray-400 my-2 ">{phones.length} Users</h3>
          <div className="border border-violetBlue p-3 flex gap-2 rounded-full mb-3">
            <Image
              src={"/search.svg"}
              alt="search"
              height={100}
              width={100}
              className="h-6 w-6"
            />
            <input
              type="text"
              className="flex-1 bg-transparent focus:outline-none"
              placeholder="Search Users"
            />
          </div>
          <div className="w-full flex flex-col gap-3 items-center justify-center">
            {phones.map((phone, index) => (
              <UserComponent key={index} phone={phone} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSelection;
