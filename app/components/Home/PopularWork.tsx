import React from "react";
import NextLink from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PopularWork: React.FC = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Works</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={false}
      >
        {/* Replace with actual popular works data */}
        {Array.from({ length: 6 }).map((_, i) => (
          <figure
            className="p-4 bg-gray-100 rounded shadow flex flex-col md:flex-row text-center"
            key={i}
          >
            <div className="bg-gray-300 rounded-none w-full md:w-1/2 h-40 md:h-auto mb-4 md:mb-0">
              ss
            </div>
            <div className="md:ml-4 text-center md:text-left space-y-2 flex-1">
              <h3 className="text-xl font-bold mb-2">Book Title {i + 1}</h3>
              <p className="text-sm">Rating: 4.5/5</p>
              <p className="m-0 text-slate-700 dark:text-slate-500">Fiction</p>
              <blockquote>
                <p className="text-lg font-medium">
                  Short description of the book goes here. This is just a
                  placeholder text.
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
              </figcaption>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                <NextLink href="/bookdetail">View Work</NextLink>
              </button>
            </div>
          </figure>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularWork;
