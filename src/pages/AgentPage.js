import React from "react";

import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RefreshIcon from "@mui/icons-material/Refresh";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import axios from "axios";

import logo from "../assets/logo.png";

const AgentPage = () => {
  const access_token = JSON.parse(localStorage.getItem("fb")).authResponse
    .accessToken;

  const getConversationList = () => {};

  return (
    <>
      <div className="flex flex-row">
        <div className="flex h-full w-[80px] min-h-screen block max-h-screen bg-primary-blue p-4">
          <div className="flex flex-col w-full gap-8 items-center">
            <img src={logo} className="w-14 rounded-full" alt="" />
            <InboxIcon fontSize="large" className="text-white" />
            <PeopleAltIcon
              fontSize="large"
              className="text-[100px] text-white"
            />
            <TrendingUpIcon fontSize="large" className="text-white" />
          </div>
        </div>
        <div className=" bg-primary-gray border-2 border-primary-gray">
          <div className="flex flex-col w-[350px]">
            <div className="flex flex-row gap-4 items-center p-4">
              <FormatAlignLeftIcon fontSize="medium" className="" />
              <h1 className="font-semibold text-2xl grow"> Conversations</h1>
              <RefreshIcon fontSize="medium" className="mt-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse p-4 w-[800px] bg-primary-gray-60">
          <div className="p-2">
            <input
              type="text"
              className="w-full border border-primary-blue p-2 rounded-xl"
              placeholder={`Message`}
            />
          </div>
          <div className="bg-gray"></div>
        </div>
        <div className="flex flex-col grow border-2">
          <div className="gap-4 h-[250px] p-2">
            <div className="flex flex-col p-6 items-center">
              <img src="" alt="" />
              <h1 className="text-2xl">Amit RG</h1>
              <p className="text-xs text-primary-gray-300">Offline</p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2 items-center">
                <div className="flex flex-row gap-2 p-2 border-2 rounded-lg">
                  <PhoneIcon fontSize="medium" />
                  <p>Call</p>
                </div>
                <div className="flex flex-row gap-2 p-2 border-2 rounded-lg">
                  <AccountCircleIcon fontSize="medium" />
                  <p>Profile</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow bg-primary-gray-50"></div>
        </div>
      </div>
    </>
  );
};

export default AgentPage;
