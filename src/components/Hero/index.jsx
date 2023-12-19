import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col justify-center">
        <p className="text-lg font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1>
          The New Arrival
          <br />
          <span>Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
      </div>
      <div className="flex-1">World</div>
    </div>
  );
};

export default Hero;
