import React from "react";

const BulletText = ({ boldText, normalText }) => {
  return (
    <div>
      <p className="font-bold text-4xl font-palanquin">{boldText}</p>
      <p className="leading-7 font-montserrat text-slate-gray">{normalText}</p>
    </div>
  );
};

export default BulletText;
