import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export const IntegratedPage = () => {
  const history = useHistory();

  const deleteIntegration = () => {};

  const agentConnect = (e) => {
    e.preventDefault();
    history.push("/messages");
  };

  return (
    <div className="flex flex min-h-screen block max-h-screen bg-primary-blue justify-around items-center">
      <div className="flex flex-col bg-white p-8 w-[500px] rounded-3xl">
        <div className="flex flex-col font-semibold p-4 justify-around">
          <h1 className="text-center">Facebook Page Integration</h1>
          <h1 className="text-center">Integrated Page: Amazon Business</h1>
        </div>
        <div className="mt-2">
          <button className="w-full bg-primary-red mt-4 text-white p-3 rounded-lg">
            <p className="text-base font-lighter">Delete Integration</p>
          </button>
          <button
            className="w-full bg-primary-blue mt-4 text-white p-3 rounded-lg"
            onClick={agentConnect}
          >
            <p className="text-base font-lighter">Reply to Messages</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegratedPage;
