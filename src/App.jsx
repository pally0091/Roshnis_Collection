/* eslint-disable react/no-unescaped-entities */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Main from "./Components/Main";

import Products from "./Components/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
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
