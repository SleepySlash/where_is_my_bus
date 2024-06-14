import Link from "next/link";
import Image from "next/image";
import React from "react";
import { link } from "fs";

const Item = ({
  icon,
  name,
  linkto,
}: {
  icon: string;
  name: string;
  linkto: string;
}) => {
  return (
    <Link href={linkto} className="flex gap-3 items-center my-2">
      <Image
        src={icon}
        alt="User"
        width={10}
        height={10}
        className="h-5 w-5 text-violetBlue"
      />
      <p className="font-manrope text-xl text-black">{name}</p>
    </Link>
  );
};

export default Item;
