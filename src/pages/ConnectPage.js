import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userUpdate } from "../redux/user/user";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export const ConnectPage = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleConnect = async (e) => {
    e.preventDefault();
    const status = await window.fblogin();
    console.log(status);

    const access_token = JSON.parse(localStorage.getItem("fb"))?.authResponse.accessToken;
    dispatch(userUpdate({ access_token: access_token }));
    
    history.push("/integrate");
  };

  return (
    <div className="flex flex min-h-screen block max-h-screen bg-primary-blue justify-around items-center">
      <div className="flex flex-col bg-white p-8 w-[500px] rounded-3xl">
        <div className="flex font-semibold text-xl p-4 justify-around">
          <h1>Facebook Page Integration</h1>
        </div>
        <div className="mt-2">
          <button
            className="w-full bg-primary-blue mt-4 text-white p-3 rounded-lg"
            onClick={handleConnect}
          >
            <p className="text-base font-lighter">Connect Page</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
