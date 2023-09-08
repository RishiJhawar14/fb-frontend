import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { userUpdate } from "../redux/user/user";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let body = { email: email, password: password };
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        body
      );

      localStorage.removeItem("fb");

      console.log(res);
      dispatch(
        userUpdate({
          token: res.data?.token,
        })
      );
      
      history.push("/connect");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex min-h-screen block max-h-screen bg-primary-blue justify-around items-center">
      <div className="flex flex-col bg-white p-4 rounded-3xl">
        <div className="flex font-semibold text-xl p-4 justify-around mt-4 mb-2">
          <h1>Login to your Account</h1>
        </div>
        <form className="flex flex-col w-[400px] p-4 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-lighter">Email</p>
            <input
              type="email"
              placeholder="Email"
              className="border border-primary-gray-200 rounded p-1 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-lighter">Password</p>
            <input
              type="password"
              placeholder="Password"
              className="border border-primary-gray-200 rounded p-1 w-full"
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleSubmit}
            >
              <p className="text-base font-lighter">Login</p>
            </button>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-row gap-1">
              <p className="text-xs">New to MyApp?</p>
              <p
                className="text-primary-blue text-xs hover:cursor-pointer"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Sign Up
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
