import React from "react";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import SignIn from "../SignIn";
import Menu from "../Menu";

const Nav = () => {
  return (
    <header className="padding-x w-full py-8 absolute z-10">
      <nav className="flex justify-between max-container">
        <Logo />
        <NavLinks />
        <SignIn />
        <Menu />
      </nav>
    </header>
  );
};

export default Nav;
