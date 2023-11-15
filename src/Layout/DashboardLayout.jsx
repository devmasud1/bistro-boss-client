import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const userDashboardMenu = (
    <>
      <li>
        <NavLink to="dashboard/userHome"> User Home </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/reservation"> Reservation </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/payment"> payment history </NavLink>
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
          {" "}
          my cart{" "}
        </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/addReview"> add review </NavLink>
      </li>
      <li>
        <NavLink to="dashboard/myBooking"> my booking </NavLink>
      </li>
    </>
  );
  const userHomeMenu = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/menu"> Menu </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/shop"> Shop </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/contact"> Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 font-medium uppercase space-y-3">
          {userDashboardMenu}

          <div className="divider">  </div>
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
