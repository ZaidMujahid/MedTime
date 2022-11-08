import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isloading, error } = useSignup()

  const handleSignup = async (e) => {
    e.preventDefault()
    await signup(email, password)
  };

  return (
    <div className="flex h-screen justify-center items-center bg-sky-50 ">
      <div className=" shadow-xl rounded-xl bg-white py-4 md:p-10">
          <div className="flex justify-center items-center">
            <form action="" className="px-8" onSubmit={handleSignup}>
              <div className="flex justify-around">
                <h1 className="text-3xl mx-auto font-bold text-sky-600">Sign up</h1>
              </div>

              <input
                type="email"
                placeholder="Gmail"
                className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none block mt-8 mb-4 mx-auto"
                
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none block mx-auto"
                
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button
                className="py-1 px-2 mb-2 font-medium text-lg bg-sky-50 hover: shadow-medium border-2 border-sky-600 rounded-lg hover:text-white hover:bg-sky-500 transition-all duration-300 text-sky-500 block mx-auto mt-8"
                type="submit"
                disabled={isloading}
              >
                Sign up
              </button>
              {error && <div className="text-lg text-red-600 block text-center">{error}</div>}
            </form>
          </div>
      </div>
    </div>
  );
};

export default SignUp;
