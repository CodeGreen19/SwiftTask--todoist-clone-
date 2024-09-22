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
          <div className="bg-green-500 min-h-72">for video</div>
        </div>
      ))}
    </div>
  );
};

export default StepsMobile;
