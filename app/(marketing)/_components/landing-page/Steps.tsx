"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { StepsDataInfo } from "../data";
import SetVideoBox from "../steps/SetVideoBox";
import StepTextFormat from "../steps/StepTextFormat";

const data = ["First Video", "Secont Video ", "Third Video ", "Forth Video "];

const Steps = () => {
  const [showVideo, setShowVideo] = useState<number>(0);
  return (
    <div className="mb-10 px-4 lg:px-16 hidden lg:block">
      <div className="grid grid-cols-[1.5fr_1fr] gap-2 ">
        <div className="xl:ml-32">
          {StepsDataInfo.map((item, i) => (
            <motion.div
              viewport={{ amount: "all" }}
              onViewportEnter={() => setShowVideo(i)}
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
          <div className="rounded-lg border border-gray-300 sticky top-32  z-20 items-start">
            <SetVideoBox text={data[showVideo]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
