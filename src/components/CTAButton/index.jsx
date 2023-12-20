import React from "react";
import { arrowRight } from "../../assets/icons";

const CTAButton = ({ label }) => {
  return (
    <button
      className="w-48 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-coral-red text-white border-coral-red rounded-full h-12"
    >
      {label}
      <img
        src={arrowRight}
        alt="arrow right"
        className="ml-2 rounded-full bg-white w-5 h-5"
      />
    </button>
  );
};

export default CTAButton;
