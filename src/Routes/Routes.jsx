import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Contact from "../pages/Contact/Contact";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <Menu />,
      },
      {
        path: "/our-shop",
        element: <OurShop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
