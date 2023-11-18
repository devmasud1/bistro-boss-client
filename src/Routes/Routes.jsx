import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Contact from "../pages/Contact/Contact";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "./../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import AddItem from "../pages/Dashboard/Admin/AddItem/AddItem";
import ManageItem from "../pages/Dashboard/Admin/ManageItem/ManageItem";
import ManageBooking from "../pages/Dashboard/Admin/ManageBooking/ManageBooking";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/our-shop/:category",
        element: <OurShop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },

      //admin routes
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "add-items",
        element: <AddItem />,
      },
      {
        path: "manage-items",
        element: <ManageItem />,
      },
      {
        path: "manage-booking",
        element: <ManageBooking />,
      },

      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
]);
