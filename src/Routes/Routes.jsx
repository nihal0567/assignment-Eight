import { createBrowserRouter } from "react-router";

import Mainlayout from "../Components/MainLayout/Mainlayout";
import Home from "../Components/Pages/Home";
import ErrorPage from "../Components/Pages/ErrorPage";
import Application from "../Components/Pages/Application";
import AllAppsList from "../Components/Pages/AllAppsList";
import Appdetail from "../Components/Pages/Appdetail";

const router = createBrowserRouter([
  {
    path: '/' ,
    element: <Mainlayout/>,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: "Loading...." ,
    children: [
        {
        index:true,
        element: <Home/>,
   
      },
         {
        path: '/app' ,
        element: <AllAppsList/>
        },
         {
        path: '/installation' ,
        element: <Appdetail/>
        },
        {
          path: '/app/:id',
          element: <Application/>
        },
        // {
        //   path: '/appDetail',
        //   element: <Appdetail/>
        // }
    ]
  },
//   {
//     path: '*',
//     element: <ErrorPage/>
//   }
])

export default router