import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import MobileReviewAutoScroll from "./MobileReviewAutoScroll";
import { reviewData } from "../data";

const Review = () => {
  return (
    <Fragment>
      <div className=" px-16 hidden lg:flex items-center justify-between h-72">
        {reviewData.map((item, i) => (
          <div
            key={i}
            className={cn(
              "border-slate-300 flex items-center justify-center flex-col gap-4 w-1/4  h-2/4 px-10",
              reviewData.length === i + 1 ? "" : "border-r-2"
            )}
          >
            <p className="text-center">{item.text}</p>
            <h1>logo hre</h1>
          </div>
        ))}
      </div>
      <MobileReviewAutoScroll slides={reviewData} />
    </Fragment>
  );
};

export default Review;
