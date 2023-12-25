import React from "react";
import { offer } from "../../assets/images";
import CTAButton from "../CTAButton";
import SecondaryButton from "../SecondaryButton";

const SpecialOffer = () => {
  return (
    <section
      id="special-offers"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="offers"
          className="object-contain w-full"
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <CTAButton label="Shop now" showArrow />
          <SecondaryButton label="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
