import { cn } from "@/lib/utils";
import React from "react";

const TemplateCard = ({
  title,
  imageUrl,
  des,
  index,
}: {
  title: string;
  imageUrl: string;
  des: string;
  index: number;
}) => {
  return (
    <div className={cn("h-72 flex-none w-60 rounded-lg bg-amber-100")}>
      <h1>{title}</h1>
    </div>
  );
};

export default TemplateCard;
