import React from "react";

const SecondaryButton = ({ label }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-white text-slate-gray border-slate-gray rounded-full undefined"
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
