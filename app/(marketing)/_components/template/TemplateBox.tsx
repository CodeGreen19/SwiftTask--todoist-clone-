"use client";

import React, { useState } from "react";
import { template_data } from "../data";
import { Button } from "@/components/ui/button";
import TemplateCard from "./TemplateCard";
import { cn } from "@/lib/utils";

const TemplateBox = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div className="">
      <div className="w-full flex my-4 items-center justify-center gap-2">
        {template_data.map((item, i) => (
          <Button
            key={i}
            onClick={() => setSelectedItem(i)}
            className={cn(
              "rounded-lg p-6",
              template_data[selectedItem].title === item.title
                ? "bg-signature hover:bg-signature"
                : ""
            )}
            variant={"secondary"}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <div className="my-14 grid grid-cols-4 xl:grid-cols-5 gap-3">
          {template_data[selectedItem].info.map((item, i) => (
            <TemplateCard
              key={i}
              title={item.title}
              des={item.des}
              imageUrl={item.imageUrl}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateBox;
