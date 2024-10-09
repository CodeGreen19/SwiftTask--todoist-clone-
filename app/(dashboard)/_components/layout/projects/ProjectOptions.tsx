import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomBtn from "../../shared/loading/CustomBtn";

const ProjectOptions = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent side="right" className="p-2 max-w-36  space-y-2">
        <div> another project</div>
        <CustomBtn className="text-red-500 bg-transparent">Delete</CustomBtn>
      </PopoverContent>
    </Popover>
  );
};

export default ProjectOptions;
