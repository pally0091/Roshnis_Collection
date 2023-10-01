/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Logo.png";

const Head = () => {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <div className="w-1/3">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="w-1/3 flex justify-end">
        <a
          className="mx-2"
          href=""
        >
          F
        </a>
        <a
          className="mx-2"
          href=""
        >
          W
        </a>
      </div>
    </div>
  );
};

export default Head;
