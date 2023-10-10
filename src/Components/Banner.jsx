/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/Roshnis Collection.gif";

const Banner = () => {
  return (
    <div className="w-[95%] mx-auto p-2 border border-black rounded-lg">
      <img
        className="rounded-lg"
        src={banner}
        alt=""
      />
    </div>
  );
};

export default Banner;
