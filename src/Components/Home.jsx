/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div
        id="home"
        className="p-5"
      >
        <Banner></Banner>
      </div>
      <Products></Products>
    </div>
  );
};

export default Home;
