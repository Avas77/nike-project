import React from "react";
import { hamburger } from "../../assets/icons";

const Menu = () => {
  return (
    <button className="hidden max-lg:block">
      <img src={hamburger} width={25} height={25} />
    </button>
  );
};

export default Menu;
