import React from "react";
import Image from "next/image";

const UserComponent = ({ phone }: { phone: string }) => {
  return (
    <div className="border border-violetBlue px-3 py-2 flex justify-between rounded-full w-full items-center">
      <div className="flex gap-5 items-center">
        <Image
          src={"/user.svg"}
          alt="User"
          height={15}
          width={15}
          className="h-5 w-5"
        />
        <p className="font-manrope text-xl  text-black">{phone}</p>
      </div>

      <Image
        src={"/more.svg"}
        alt="more"
        height={5}
        width={15}
        className="h-5 w-5"
      />
    </div>
  );
};

export default UserComponent;
