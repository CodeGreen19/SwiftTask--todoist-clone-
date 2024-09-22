"use client";
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const TestimonialsAutoScroll = ({ slides }: { slides: string[] }) => {
  const options: EmblaOptionsType = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false, speed: 1 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi?.plugins()?.autoScroll.play();
    }
  }, [emblaApi]);
  return (
    <div
      className="w-full 
     my-8"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((item, i) => (
            <div className="mx-2 " key={i}>
              <div className="h-36 w-64 border-r-2 border-r-gray-200  flex flex-col items-center justify-center p-4 gap-4">
                <h1 className="text-center">logo</h1>
                <h1>logo placed here</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAutoScroll;
