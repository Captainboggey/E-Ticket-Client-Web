import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Lalbag from "../Pages/Lalbag/Lalbag";
import LalbagTicket from "../Pages/Lalbag/LalbagTicket";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/lalbag",
        element: <Lalbag></Lalbag>,
      },
      {
        path: "/lalbagTicket",
        element: <LalbagTicket></LalbagTicket>,
      },
    ],
  },
]);
