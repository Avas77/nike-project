import React from "react";
import CTAButton from "../CTAButton";
import BulletTextGroup from "../BulletTextGroup";

const Hero = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col justify-center relative xl:w-2/5">
        <p className="text-lg font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <CTAButton label="Shop now" />
        <BulletTextGroup />
      </div>
      <div className="flex-1">World</div>
    </div>
  );
};

export default Hero;
