"use client";
import Navbar from "@/components/front_end/Navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { columns } from "@/components/ui/columns";
import UserComponent from "@/components/front_end/Admin/UserComponent";
import Link from "next/link";
import { DataTable } from "@/components/ui/data-table";
import { databases } from "@/lib/appwrite";
import { getUserInterface } from "@/lib/schemas";

import { Plus } from "lucide-react";

const BusSelection = () => {
  const phones = ["1234567890", "1234567890", "1234567890"];
  const [data1, setData] = useState<getUserInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!
      );
      // @ts-ignore
      setData(result.documents);
      console.log(result.documents);
    };
    fetchData();
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] font-manrope text-violetBlue mx-auto">
      <Navbar />
      <div>
        <div className="flex justify-between items-center px-5 py-2">
          <h1 className="text-2xl font-semibold text-center mt-1 md:text-3xl">
            All Users
          </h1>
          <Link
            href={"/admin/createUser"}
            className="flex gap-2 items-center p-2 bg-white rounded-md hover:bg-violetBlue hover:text-white max-md:bg-violetBlue max-md:text-white"
          >
            <Plus className="h-6 w-6 cursor-pointer" />{" "}
            <span className="max-md:hidden text-lg font-bold ">Add User</span>
          </Link>
        </div>
        <div className="px-5">
          {/* <h3 className="text-gray-400">Showing results for</h3>
          <h1 className="font-semibold text-2xl">
            MLR Institute of Technology
          </h1>
          <div className="h-[1px] mt-3 bg-violetBlue w-full" />
          <h3 className="text-gray-400 my-2 ">{phones.length} Users</h3> */}
          <div className="mx-auto ">
            <DataTable columns={columns} data={data1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSelection;
