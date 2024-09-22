import { Button } from "@/components/ui/button";
import React from "react";
import Hero from "./_components/landing-page/Hero";
import Review from "./_components/landing-page/Review";
import Steps from "./_components/landing-page/Steps";
import StepsMobile from "./_components/landing-page/StepsMobile";
import ExampleVideo from "./_components/landing-page/ExampleVideo";
import Templates from "./_components/landing-page/Templates";
import TestimonialsAutoScroll from "./_components/landing-page/TestmonialsAutoScroll";
import Testimonials from "./_components/landing-page/Testimonials";
import Bottom from "./_components/landing-page/Bottom";
import Navbar from "./_components/navigation/Navbar";
import Footer from "./_components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container m-auto">
        <Hero />
        <Review />
        <Steps />
        <StepsMobile />
        <ExampleVideo />
        <Templates />
        <Testimonials />
      </div>
      <Bottom />
      <Footer />
    </div>
  );
};

export default HomePage;
