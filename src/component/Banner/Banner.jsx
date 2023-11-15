import React from 'react';
import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import banner1 from '../../assets/ban1.jpg';
import banner2 from '../../assets/ban2.jpg';
import banner3 from '../../assets/ban3.jpg';
import banner4 from '../../assets/ban4.jpg';


const Banner = () => {
  return (
    <div>
        <div className=" h-56 w-full sm:h-[80vh]  ">
      <Carousel leftControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
            <ArrowLineLeft size={20} weight="bold" color="white" />
          </span>
        }
          rightControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
            <ArrowLineRight size={20} weight="bold" color="white" />
          </span>
        }
          showControls={true}>
        <img
          src={banner1}
          alt="slider-1"
          height={650}
          width={910}
        />
        <img
          src={banner2}
          alt="slider-2"
          height={650}
          width={910}
        />
        <img
          src={banner3}
          alt="slider-3"
          height={650}
          width={910}
        />
        <img
          src={banner4}
          alt="slider-4"
          height={650}
          width={910}
        />
      </Carousel>
    </div>
    </div>
  );
};

export default Banner;