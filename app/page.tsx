"use client";
import Hero from "@/components/front_end/Hero";
import Home from "@/components/front_end/Home";
import Navbar from "@/components/front_end/Navbar";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useUser } from "@/providers/AuthProvider";

const HomePage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && user.labels.includes("admin")) {
      router.push("/admin");
    }
    setLoading(false);
  }, [user, router]);

  return (
    <div className="transition-all">
      <Hero />
      <Home />
    </div>
  );
};

export default HomePage;
