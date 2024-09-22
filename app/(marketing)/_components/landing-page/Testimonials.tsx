import React from "react";
import StepTextFormat from "../steps/StepTextFormat";
import TestimonialsAutoScroll from "./TestmonialsAutoScroll";

const Testimonials = () => {
  return (
    <div className="lg:pl-16 grid grid-cols-1 lg:grid-cols-2 gap-6 my-11 px-4 lg:px-16">
      <div className="xl:ml-16">
        <StepTextFormat
          info={{
            heading: "In it for the long haul",
            title: "A task manager you can trust for life",
            des: "We've been building Todoist for 17 years and 237 days. Rest assured that we'fll never sell out to the highest bidder.",
          }}
        />
      </div>
      <div className="relative lg:mr-10">
        <TestimonialsAutoScroll slides={["", "", "", ""]} />
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonials;
