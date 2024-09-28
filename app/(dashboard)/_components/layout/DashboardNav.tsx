import React from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import MobileSideBar from "./MobileSideBar";
import { CiCircleList } from "react-icons/ci";
import ViewMenu from "./ViewMenu";

const DashboardNav = () => {
  return (
    <div className="w-full h-14 flex items-center justify-between lg:justify-end px-4">
      <MobileSideBar>
        <span className="lg:hidden">
          <BsReverseLayoutTextSidebarReverse />
        </span>
      </MobileSideBar>
      <ViewMenu>
        <span className="flex items-center gap-2">
          <CiCircleList /> <span className="hidden lg:block">View</span>
        </span>
      </ViewMenu>
    </div>
  );
};

export default DashboardNav;
