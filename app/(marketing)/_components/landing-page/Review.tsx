import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import MobileReviewAutoScroll from "./MobileReviewAutoScroll";
import { reviewData } from "../data";
import Image from "next/image";

const Review = () => {
  return (
    <Fragment>
      <div className=" px-16 mb-56 hidden relative z-20 lg:flex items-center justify-between h-72 ">
        {reviewData.map((item, i) => (
          <div
            key={i}
            className={cn(
              "border-slate-300 flex items-center justify-center flex-col gap-4 w-1/4  h-2/4 px-10",
              reviewData.length === i + 1 ? "" : "border-r-2"
            )}
          >
            <p className="text-center">{item.text}</p>
            <h1>Company Logo Here</h1>
          </div>
        ))}
        <Image
          src="/heroWave.jpg"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "auto" }} // optional
          alt="alterImage"
          className="absolute -z-10 opacity-35 top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>
      <MobileReviewAutoScroll slides={reviewData} />
    </Fragment>
  );
};

export default Review;
