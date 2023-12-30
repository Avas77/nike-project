import React from "react";

const FilterDrawer = () => {
  return (
    <div>
      <div className="pb-5 mb-5 border-b border-solid border-b-border-gray">
        <h6 className="text-[16px] font-medium">Pick Up Today</h6>
      </div>
      <ul>
        <li className="pb-[10px] pr-4 text-[16px] font-medium">Jordan</li>
        <li className="pb-[10px] pr-4 text-[16px] font-medium">Lifestyle</li>
        <li className="pb-[10px] pr-4 text-[16px] font-medium">Running</li>
        <li className="pb-[10px] pr-4 text-[16px] font-medium">Basketball</li>
        <li className="pb-[10px] pr-4 text-[16px] font-medium">
          Training & Gym
        </li>
      </ul>
    </div>
  );
};

export default FilterDrawer;
