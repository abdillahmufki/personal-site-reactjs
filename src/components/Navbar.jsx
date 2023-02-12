import React from "react";
import { ImMenu } from "react-icons/im";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar sticky top-0 z-30 w-full px-2 py-4 bg-slate-800 sm:px-4 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <ImMenu size={30} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/contact">
                <li>
                  <a>Contact</a>
                </li>
              </Link>
              <li tabIndex={1}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <Link to="https://personal-site-abdillahmufki.netlify.app/">
                <li>
                  <a>Portfolio</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="logo">
            <a href="#">
              <img src={logo} width={60} alt="" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/contact">
              <li>
                <a>Contact</a>
              </li>
            </Link>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-slate-400 text-black">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <Link to="https://personal-site-abdillahmufki.netlify.app/">
              <li>
                <a>Portfolio</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-800">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
