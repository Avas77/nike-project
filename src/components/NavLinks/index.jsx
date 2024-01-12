import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex flex-1 justify-center gap-16 items-center max-lg:hidden">
      <li>
        <Link
          to={"/"}
          className="text-slate-gray text-lg leading-normal font-montserrat"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-slate-gray text-lg leading-normal font-montserrat"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          className="text-slate-gray text-lg leading-normal font-montserrat"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-slate-gray text-lg leading-normal font-montserrat"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
