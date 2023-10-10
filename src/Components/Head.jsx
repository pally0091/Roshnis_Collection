/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Logo.png";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

const Head = () => {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <div className="w-[70%] md:w-1/3 lg:w-1/3">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="w-1/3 md:flex lg:flex justify-end hidden ">
        <a
          className="mx-2 text-2xl shadow-lg shadow-stone-700 rounded-full hover:shadow-none transition-all duration-500"
          href="https://www.facebook.com/roshnitc2021"
          target="_blank"
        >
          <BsFacebook></BsFacebook>
        </a>
        <a
          className="mx-2 text-2xl shadow-lg shadow-stone-700 rounded-full hover:shadow-none transition-all duration-500"
          href=""
        >
          <BsWhatsapp></BsWhatsapp>
        </a>
      </div>
    </div>
  );
};

export default Head;
