import React from "react";

const SetVideoBox = ({ text }: { text: string }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-lg">
      {text}
    </div>
  );
};

export default SetVideoBox;
