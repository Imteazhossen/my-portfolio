// import {
//   createBrowserRouter,

// } from "react-router";
// import Layout from "../Layout/Layout";
// import Home from "../Pages/Home/Home";
// import Details from "../Components/Details";


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Layout,
//     children: [
//         {
//             index: true,
//             Component: Home,
//         },
//         {
//            path: '/projects/:id',
//            Component: Details
//         }
//     ]
//   },
// ]);

import { createBrowserRouter } from "react-router"; // usually from react-router-dom
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Details from "../Components/Details";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects/:id",
        Component: Details,
      },
    ],
  },
]);
