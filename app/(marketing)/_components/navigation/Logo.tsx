import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-1">
        <Image src={"/logo.svg"} alt="Logo" width={50} height={50} />
        <h1 className="text-[1.7rem] lg:text-3xl text-signature font-logo font-black">
          SwiftTask
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
