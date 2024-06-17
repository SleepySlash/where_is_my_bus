import Hero from "@/components/front_end/Hero";
import Home from "@/components/front_end/Home";
import Navbar from "@/components/front_end/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="transition-all">
      <Navbar />
      <Hero />
      <Home />
    </div>
  );
};

export default page;
