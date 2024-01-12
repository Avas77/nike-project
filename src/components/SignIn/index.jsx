import React from "react";
import { getToken } from "../../utils";
import { profile } from "../../assets/icons";

const SignIn = () => {
  const userSession = getToken();

  if (userSession?.token) {
    return (
      <div className="flex items-center gap-2">
        <img src={profile} alt="Profile Image" width={30} />
        <span>{userSession?.user?.name}</span>
      </div>
    );
  }

  return (
    <a
      href="/signin"
      className="text-lg font-montserrat font-medium leading-normal max-lg:hidden mr-24"
    >
      SignIn / Explore now
    </a>
  );
};

export default SignIn;
