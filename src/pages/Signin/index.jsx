import { useState } from "react";
import { createUser } from "../../api";
import { setToken } from "../../utils";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    try {
      const token = await createUser({
        name,
        email,
        password,
      });
      setToken(token);
      navigate("/products");
    } catch (error) {
      console.log({ error });
    }
  };

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
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          className="p-4 border input-border rounded-lg w-[487px] my-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          className="p-4 border input-border rounded-lg w-[487px] my-4"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="text-slate-500 my-6 flex justify-center">
        By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-[487px] flex justify-end">
          <button
            className="bg-black text-white px-6 py-4 rounded-full"
            onClick={handleCreateUser}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
