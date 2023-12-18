import React from "react";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import SignIn from "../SignIn";

const Nav = () => {
  return (
    <header className="padding-x w-full py-8">
      <nav className="flex justify-between">
        <Logo />
        <NavLinks />
        <SignIn />
      </nav>
    </header>
  );
};

export default Nav;
