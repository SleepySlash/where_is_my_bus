"use client";

import { useEffect, useState } from "react";
import { columns } from "../../../components/ui/columns";
import { DataTable } from "@/components/ui/data-table";
import { databases } from "@/lib/appwrite";
import { getUserInterface } from "@/lib/schemas";

export default function DemoPage() {
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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data1} />
    </div>
  );
}
