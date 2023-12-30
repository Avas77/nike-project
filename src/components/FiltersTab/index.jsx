import React from "react";
import { chevronDown, settings } from "../../assets/icons";

const FiltersTab = () => {
  return (
    <div className="flex justify-between py-8 padding-x">
      <h1 className="text-2xl">Men&apos;s Shoes & Sneakers(972)</h1>
      <div className="flex gap-6">
        <button className="flex items-center">
          <span className="pr-2 text-lg">Hide Filters</span>
          <img src={settings} alt="settings" width={24} height={24} />
        </button>
        <button className="flex items-center mr-[5rem]">
          <span className="pr-2 text-lg">Sort by</span>
          <img src={chevronDown} alt="Down arrow" width={14} height={14} />
        </button>
      </div>
    </div>
  );
};

export default FiltersTab;
