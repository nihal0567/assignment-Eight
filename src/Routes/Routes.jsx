import { createBrowserRouter } from "react-router";

import Mainlayout from "../Components/MainLayout/Mainlayout";
import Home from "../Components/Pages/Home";
import ErrorPage from "../Components/Pages/ErrorPage";
import CountedApps from "../Components/Pages/CountedApps";

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
        loader: ()=> fetch('./data.json')

        },
         {
        path: '/app' ,
        element: <a/>
        },
         {
        path: '/countedApp' ,
        element: <CountedApps/>
        },
    ]
  },
//   {
//     path: '*',
//     element: <ErrorPage/>
//   }
])

export default router