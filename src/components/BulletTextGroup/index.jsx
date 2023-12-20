import React from "react";
import BulletText from "./BulletText";

const BulletTextGroup = () => {
  return (
    <div className="flex gap-16 mt-20 w-full">
      <BulletText boldText={"1k+"} normalText={"Brands"} />
      <BulletText boldText={"500+"} normalText={"Shops"} />
      <BulletText boldText={"250k+"} normalText={"Customers"} />
    </div>
  );
};

export default BulletTextGroup;
