/* eslint-disable no-unused-vars */
import React from "react";
import Head from "./Head";
import { Outlet } from "react-router-dom";


const Main = () => {
  return (
    <div>
      <Head></Head>

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
