import React from "react";
import { FaAndroid } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="px-4 lg:px-16">
      <div className=" mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="xl:ml-32">
          <h1 className="text-[2.8rem] text-center md:text-start md:text-[3.4rem] font-bold leading-tight">
            Organize your <br className="md:block hidden" /> work and{" "}
            <br className="md:block hidden " /> life, finally.
          </h1>
          <p className="text-lg md:text-xl my-2 text-center md:text-start">
            Simplify life for both you and your team with the world&apos;s{" "}
            <br /> #1 task manager and to-do list app.
          </p>
          <p className="flex gap-2 text-center justify-center md:justify-start md:text-start">
            374k +{" "}
            <span className="flex items-center justify-center  gap-1">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </span>
            reviews from{" "}
            <span className="flex items-center gap-1">
              <FaAndroid />
              <FaApple />
            </span>
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <Button className="p-6 md:p-8 mt-6 bg-signature hover:bg-amber-600 rounded-md md:rounded-xl  md:text-lg  shadow-[6px_6px_0px_#c57000] -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all hover:shadow-none">
              Star for free
            </Button>
          </div>
        </div>
        <div className="h-[420px] w-full  rounded-xl border border-gray-200"></div>
      </div>
    </div>
  );
};

export default Hero;
