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
import AdminRoutes from "./AdminRoutes";
import UpdateItem from "../pages/Dashboard/Admin/ManageItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";

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
      {
        path: "payment",
        element: <Payment />,
      },

      //admin routes
      {
        path: "admin-home",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoutes>
            <AddItem />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoutes>
            <ManageItem />
          </AdminRoutes>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoutes>
            <UpdateItem />
          </AdminRoutes>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/api/v1/menu/${params.id}`)
      },
      {
        path: "manage-booking",
        element: (
          <AdminRoutes>
            <ManageBooking />
          </AdminRoutes>
        ),
      },

      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
