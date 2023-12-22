import React from "react";
import CTAButton from "../CTAButton";
import BulletTextGroup from "../BulletTextGroup";
import {
  bigShoe1,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="flex flex-col justify-center relative xl:w-2/5 pt-28">
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
      <div className="flex-1 bg-hero flex justify-center items-center relative flex-col">
        <img
          src={bigShoe1}
          className="object-contain relative z-10"
          width={610}
          height={502}
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          <div className="border-2 flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-coral-red">
            <img src={thumbnailShoe1} alt="shoes" width={127} height={103} />
          </div>
          <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={thumbnailShoe2} alt="shoes" width={127} height={103} />
          </div>
          <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={thumbnailShoe3} alt="shoes" width={127} height={103} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
