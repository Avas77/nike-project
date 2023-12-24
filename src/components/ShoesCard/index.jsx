import React from "react";
import { shoes } from "../../constants/shoes";
import { star } from "../../assets/icons";

const ShoesCard = () => {
  return (
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
      {shoes.map((shoe) => (
        <div
          key={shoe.id}
          className="flex flex-1 flex-col w-full max-sm:w-full"
        >
          <img src={shoe.path} alt="Nike Shoe" />
          <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" />
            <span className="font-montserrat text-xl leading-normal text-slate-gray">
              {shoe.rating}
            </span>
          </div>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {shoe.name}
          </h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            {shoe.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShoesCard;
