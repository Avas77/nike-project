import React from "react";
import { offer } from "../../assets/images";
import CTAButton from "../CTAButton";

const SpecialOffer = () => {
  return (
    <section
      id="special-offers"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div>
        <img src={offer} alt="offers" />
      </div>
      <div>
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <CTAButton label="Shop now" showArrow />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
