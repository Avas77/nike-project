import React from "react";
import BulletText from "./BulletText";

const BulletTextGroup = () => {
  return (
    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
      <BulletText boldText={"1k+"} normalText={"Brands"} />
      <BulletText boldText={"500+"} normalText={"Shops"} />
      <BulletText boldText={"250k+"} normalText={"Customers"} />
    </div>
  );
};

export default BulletTextGroup;
