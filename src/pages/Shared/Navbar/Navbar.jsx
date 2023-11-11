import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navItem = (
    <>
      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          CONTACT us
        </NavLink>
      </li>

      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          DASHBOARD
        </NavLink>
      </li>

      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/our-menu"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          Our Menu
        </NavLink>
      </li>

      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/our-shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar fixed z-10 bg-black bg-opacity-50 text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded-box w-56 font-extrabold"
            >
              {navItem}
            </ul>
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl font-black">Bistro Boss</h1>
            <h2 className="text-xl lg:text-2xl font-bold">Restaurant</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex gap-20">
          <ul className="my-menu menu-horizontal px-2 font-extrabold ">
            {navItem}
          </ul>
        </div>
        <div className="w-1/2 justify-end">
          <a className="btn btn-primary">sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
