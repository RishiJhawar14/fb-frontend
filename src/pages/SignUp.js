import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      let body = { name: name, email: email, password: password };
      const res = await axios.post(
        "https://fb-backend-k1g2.onrender.com/api/auth/login",
        body
      );

      console.log(res);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="flex flex min-h-screen block max-h-screen bg-primary-blue justify-around items-center">
      <div className="flex flex-col bg-white p-4 rounded-3xl">
        <div className="flex font-semibold text-xl p-4 justify-around mt-4 mb-2">
          <h1>Create Account</h1>
        </div>
        <form className="flex flex-col w-[400px] p-4 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-lighter">Name</p>
            <input
              type="text"
              placeholder="Name"
              className="border border-primary-gray-200 rounded p-1 w-full"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-lighter">Email</p>
            <input
              type="email"
              placeholder="Email"
              className="border border-primary-gray-200 rounded p-1 w-full"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-lighter">Password</p>
            <input
              type="password"
              placeholder="Password"
              className="border border-primary-gray-200 rounded p-1 w-full"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row gap-2 p-1">
            <input
              type="checkbox"
              className="border border-primary-gray-200 rounded p-1"
            />
            <p className="text-sm font-lighter">Remember Me</p>
          </div>
          <div className="mt-2">
            <button
              className="w-full bg-primary-blue text-white p-3 rounded-lg"
              onClick={signUpHandler}
            >
              <p className="text-base font-lighter">Sign Up</p>
            </button>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-row gap-1">
              <p className="text-xs">Already have an account?</p>
              <p
                className="text-primary-blue text-xs hover:cursor-pointer"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
