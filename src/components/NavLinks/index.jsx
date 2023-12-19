import React from "react";

const NavLinks = () => {
  return (
    <ul className="flex flex-1 justify-center gap-16 items-center max-lg:hidden">
      <li>
        <a className="text-slate-gray text-lg leading-normal font-montserrat">
          Home
        </a>
      </li>
      <li>
        <a className="text-slate-gray text-lg leading-normal font-montserrat">
          About Us
        </a>
      </li>
      <li>
        <a className="text-slate-gray text-lg leading-normal font-montserrat">
          Products
        </a>
      </li>
      <li>
        <a className="text-slate-gray text-lg leading-normal font-montserrat">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
