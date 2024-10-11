import ExampleVideo from "./_components/landing-page/ExampleVideo";
import Hero from "./_components/landing-page/Hero";
import Review from "./_components/landing-page/Review";
import Steps from "./_components/landing-page/Steps";
import StepsMobile from "./_components/landing-page/StepsMobile";
import Templates from "./_components/landing-page/Templates";
import Testimonials from "./_components/landing-page/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Review />
      <Steps />
      <StepsMobile />
      <ExampleVideo />
      <Templates />
      <Testimonials />
    </div>
  );
};

export default HomePage;
