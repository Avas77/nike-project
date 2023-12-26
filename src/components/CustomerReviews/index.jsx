import React from "react";
import { customer1, customer2 } from "../../assets/images";
import ReviewCard from "../ReviewCard";

const CustomerReviews = () => {
  return (
    <section id="reviews" className="max-container">
      <h2 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Says?
      </h2>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        <ReviewCard
          path={customer1}
          name="Morich Brown"
          rating="(4.5)"
          review="The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
        />
        <ReviewCard
          path={customer2}
          name="Lota Mongeskar"
          rating="(4.5)"
          review="The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
