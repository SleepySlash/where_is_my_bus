"use client";
import { account } from "@/lib/appwrite";
import { useUser } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    if (user && !user.labels.includes("admin")) {
      console.log("not admin", user.labels);
      router.push("/");
    }
  }, [user, router]);

  return <div>{children}</div>;
};

export default AdminLayout;
