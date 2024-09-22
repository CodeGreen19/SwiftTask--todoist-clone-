import { Button } from "@/components/ui/button";
import React from "react";

const Bottom = () => {
  return (
    <div className="h-[80vh] flex items-center px-4 text-center gap-8 justify-center flex-col bg-gradient-to-b from-white from-5% to-20% to-amber-50">
      <h1 className="text-xl lg:text-[3rem] lg:leading-[50px] font-bold">
        Gain calmness and clarity with the <br /> world&apos;s most beloved
        productivity app
      </h1>
      <h2 className="lg:text-xl text-zinc-500">
        374000+ ★★★★★ reviews on Google Play and App Store
      </h2>
      <Button className="p-6 md:p-8 mt-6 bg-signature hover:bg-amber-600 rounded-md md:rounded-xl  md:text-lg  shadow-[6px_6px_0px_#c57000] -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all hover:shadow-none">
        Star for free
      </Button>
    </div>
  );
};

export default Bottom;
