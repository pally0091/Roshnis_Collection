/* eslint-disable react/no-unescaped-entities */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Main from "./Components/Main";

import Products from "./Components/Products";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
