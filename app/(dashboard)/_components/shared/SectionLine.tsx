import React from "react";

const SectionLine = () => {
  return (
    <div className="w-full cursor-pointer group py-3 relative">
      <hr className="bg-amber-400 h-[1.5px] transition-all group-hover:opacity-100 opacity-0" />
      <h2 className="px-2 opacity-0 group-hover:opacity-100 text-amber-500 bg-white text-sm absolute top-1/2 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2">
        Add section
      </h2>
    </div>
  );
};

export default SectionLine;
