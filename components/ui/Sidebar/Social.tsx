import React from "react";
import Link from "next/link";
import Image from "next/image";

const Social = ({
  source,
  icon,
  alt,
}: {
  source: string;
  icon: string;
  alt: string;
}) => {
  return (
    <Link href={source}>
      <Image
        src={icon}
        alt={alt}
        height={10}
        width={10}
        className="h-5 w-5 md:h-7 md:w-7"
      />
    </Link>
  );
};

export default Social;
