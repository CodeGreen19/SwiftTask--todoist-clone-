"use client";

import React, { useEffect, useRef, useState } from "react";
import StepTextFormat from "../steps/StepTextFormat";
import SetVideoBox from "../steps/SetVideoBox";
import { StepsDataInfo } from "../data";
import { motion } from "framer-motion";

let data = [
  "this is the first text ",
  "this is the secound text ",
  "this is the third text ",
  "this is the fourth text ",
];

const Steps = () => {
  const [showVideo, setShowVideo] = useState<number>(0);
  return (
    <div className="mb-10 px-4 lg:px-16 hidden lg:block">
      <div className="grid grid-cols-[1.5fr_1fr] gap-2 ">
        <div className="xl:ml-32">
          {StepsDataInfo.map((item, i) => (
            <motion.div
              viewport={{ amount: "all" }}
              onViewportEnter={(e) => setShowVideo(i)}
              className="min-h-[70vh]"
              key={i}
            >
              <StepTextFormat
                info={{
                  des: item.des,
                  heading: item.heading,
                  title: item.title,
                  className: item.headingColor,
                }}
              />
            </motion.div>
          ))}
        </div>

        <div>
          <div className="bg-red-300 sticky top-20  z-20 items-start">
            <SetVideoBox text={data[showVideo]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
