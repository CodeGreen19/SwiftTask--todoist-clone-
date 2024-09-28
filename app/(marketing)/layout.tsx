"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./_components/navigation/Navbar";
import Bottom from "./_components/landing-page/Bottom";
import Footer from "./_components/Footer";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      <Navbar />
      <div className="container m-auto">{children}</div>
      {pathname === "/" && <Bottom />}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
