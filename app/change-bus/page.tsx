import Navbar from "@/components/front_end/Navbar";
import BusComponent from "@/components/front_end/Change-Bus/BusComponent";
import React from "react";

const BusSelection = () => {
  const buses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="h-[100vh] w-[100vw] font-manrope text-violetBlue mx-auto">
      <Navbar />
      <div>
        <h1 className="text-2xl font-semibold text-center mt-1">Bus Routes</h1>
        <div className="h-[1px] mt-3 bg-violetBlue w-full" />
        <div className="mt-5  px-5">
          <h3 className="text-gray-400">Showing results for</h3>
          <h1 className="font-semibold text-2xl">
            MLR Institute of Technology
          </h1>
          <div className="h-[1px] mt-3 bg-violetBlue w-full" />
          <h3 className="text-gray-400 my-2 ">
            {buses.length} Routes Available
          </h3>

          <div className="w-full flex flex-col gap-3 items-center justify-center">
            <BusComponent route={16} active={true} />
            {buses.map((index) => (
              <BusComponent key={index} route={index} active={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSelection;
