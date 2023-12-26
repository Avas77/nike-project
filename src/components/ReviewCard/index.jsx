import React from "react";
import { star } from "../../assets/icons";

const ReviewCard = ({ path, review, rating, name }) => {
  return (
    <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      <div className="flex justify-center items-center flex-col">
        <img
          src={path}
          alt="Customer"
          className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="mt-6 max-w-sm text-center info-text">{review}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img src={star} alt="star" />
          <p className="">{rating}</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
