"use client";

import { useTheme } from "@/app/(dashboard)/_hooks/useTheme";
import { BiCheckboxChecked } from "react-icons/bi";

const Theme = () => {
  const { themeColor } = useTheme();

  const toggleTheme = (theme: "Dark" | "Light") => {
    if (theme) {
      // todo
    }
    // if (
    //   theme === "Light" &&
    //   document.documentElement.classList.contains("dark")
    // ) {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    // } else {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    // }
  };

  return (
    <div className="">
      <h1 className="my-2 text-lg font-bold">Your theme </h1>
      <div className="flex gap-3">
        <div
          onClick={() => toggleTheme("Light")}
          className="flex h-20 w-32 cursor-pointer items-center justify-center rounded-md border border-r-gray-100 shadow-md"
        >
          Light
          {themeColor === "Light" && (
            <span>
              <BiCheckboxChecked className="mx-2 text-lg text-green-500" />
            </span>
          )}
        </div>
        <div
          onClick={() => toggleTheme("Dark")}
          className="flex h-20 w-32 cursor-pointer items-center justify-center rounded-md border border-r-gray-100 bg-[#212121] text-white shadow-md"
        >
          Dark
          {themeColor === "Dark" && (
            <span>
              <BiCheckboxChecked className="mx-2 text-lg text-green-500" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Theme;
