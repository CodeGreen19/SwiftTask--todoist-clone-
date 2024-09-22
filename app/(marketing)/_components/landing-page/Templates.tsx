import React from "react";
import TemplateBox from "../template/TemplateBox";
import MobileTemplate from "./MobileTemplate";

const Templates = () => {
  return (
    <div className=" lg:text-center px-4">
      <h1 className="text-[1.5rem] lg:text-[2.5rem] my-6 font-bold">
        Kickstart your next project with Todoist Templates
      </h1>
      <h2 className="lg:text-lg text-gray-400">
        No need to create projects or setups from scratch when we have 50+
        templates made for you.
      </h2>
      <div className="hidden lg:block">
        <TemplateBox />
      </div>
      <div className="lg:hidden">
        <MobileTemplate />
      </div>
    </div>
  );
};

export default Templates;
