import React from "react";
import { StepsDataInfo } from "../data";
import StepTextFormat from "../steps/StepTextFormat";

const StepsMobile = () => {
  return (
    <div className="px-4 lg:hidden my-6">
      {StepsDataInfo.map((item, i) => (
        <div key={i}>
          <StepTextFormat
            info={{
              des: item.des,
              heading: item.heading,
              title: item.title,
              className: item.headingColor,
            }}
          />
          <div className="bg-slate-300 rounded-md min-h-72 flex items-center justify-center">
            for video
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsMobile;
