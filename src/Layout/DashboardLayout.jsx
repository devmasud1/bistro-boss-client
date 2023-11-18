import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  const adminDashboardMenu = (
    <>
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          Admin Home{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/add-items"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          add items{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/manage-items"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          manage items{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/manage-booking"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          Manage bookings
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/all-users"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          all users
        </NavLink>
      </li>
    </>
  );

  const userDashboardMenu = (
    <>
      <li>
        <NavLink
          to="/dashboard/userHome"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          User Home{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/reservation"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          Reservation{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/payment"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          payment history{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          my cart{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/addReview"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          add review{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/myBooking"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          my booking{" "}
        </NavLink>
      </li>
    </>
  );
  const userHomeMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          Home{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="dashboard/menu"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          Menu{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="dashboard/shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          Shop{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="dashboard/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white  border-b-2 border-orange-600"
              : ""
          }
        >
          {" "}
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 font-medium uppercase space-y-3">
          {isAdmin ? adminDashboardMenu : userDashboardMenu}

          <div className="divider"> </div>
          {userHomeMenu}
        </ul>
      </div>
      <div className="flex-1 p-10 bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
