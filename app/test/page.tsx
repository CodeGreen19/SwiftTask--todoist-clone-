"use client";
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const TestPage = () => {
  const options: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 18;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false, speed: 3 }),
  ]);

  useEffect(() => {
    emblaApi?.plugins()?.autoScroll.play();
  }, [emblaApi]);
  return (
    <div className="max-w-7xl m-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((index) => (
            <div className="mx-2" key={index}>
              <div className="size-[19rem] bg-red-500">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
