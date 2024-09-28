"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const PricingPage = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus
      a maxime? Rem in voluptatibus nulla repellendus eaque voluptatum aperiam
      distinctio saepe nihil maxime magni iure qui, cumque eligendi aliquam.
      <Button
        className={cn(
          "m-10 overflow-hidden relative before:absolute before:top-0 before:left-0 before:h-full before:w-1/2 before:bg-amber-500 after:absolute after:right-0 after:top-0 after:h-full after:w-1/2 after:bg-amber-500 z-10 after:-z-10 before:-z-10 hover:before:w-0 hover:after:w-0 transition-all before:transition-all after:transition-all after:duration-500 before:duration-500"
        )}
        size={"lg"}
      >
        ButtonClicked
      </Button>
    </div>
  );
};

export default PricingPage;
