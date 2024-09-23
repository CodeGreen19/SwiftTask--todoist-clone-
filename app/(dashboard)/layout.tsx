import React from "react";

const DashboardLaoyout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>this is sidebar</div>
      {children}
    </div>
  );
};

export default DashboardLaoyout;
