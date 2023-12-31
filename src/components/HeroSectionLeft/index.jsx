import React from "react";
import CTAButton from "../CTAButton";
import BulletTextGroup from "../BulletTextGroup";

const HeroSectionLeft = () => {
  return (
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
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
        Discover stylish Nike arrivals, quality comfort, and innovation for your
        active life.
      </p>
      <CTAButton label="Shop now" showArrow />
      <BulletTextGroup />
    </div>
  );
};

export default HeroSectionLeft;
