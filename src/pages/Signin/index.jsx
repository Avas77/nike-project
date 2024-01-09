import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className="flex justify-center gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="nike logo"
          width={48}
          className="my-[33px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
          width={48}
          className="my-[33px]"
        />
      </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[28px] mb-3">
          Enter your credentials to join us or sign in
        </h1>
        <input
          placeholder="Name"
          className="p-4 border input-border rounded-lg w-[487px] my-4"
        />
        <input
          placeholder="Email"
          className="p-4 border input-border rounded-lg w-[487px] my-4"
        />
        <input
          placeholder="Password"
          className="p-4 border input-border rounded-lg w-[487px] my-4"
        />
      </div>
      <div className="text-slate-500 my-6 flex justify-center">
        By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-[487px] flex justify-end">
          <button className="bg-black text-white px-6 py-4 rounded-full">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
