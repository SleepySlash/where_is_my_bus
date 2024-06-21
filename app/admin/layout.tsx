"use client";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const x = await account.get();
      if (!x.labels.includes("admin")) {
        router.push("/");
      }
      setLoading(false);
    };
    if (!loggedInUser) {
      getSession();
    }
  }, [loggedInUser, router]);
  if (loading) {
    return <div>Checking Authorization</div>;
  }
  return <div>{children}</div>;
};

export default AdminLayout;
