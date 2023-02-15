import React from "react";
import { ImMenu } from "react-icons/im";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  return (
    <>
      <div className="navbar sticky top-0 z-30 w-full px-2 py-4 bg-[#609EA2] sm:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <ImMenu size={30} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a>Contact</a>
                </li>
              </Link>
              <Link to="https://personal-site-abdillahmufki.netlify.app/">
                <li>
                  <a>Portfolio</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} width={60} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a className="text-white font-bold text">Home</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a className="text-white font-bold text">Contact</a>
              </li>
            </Link>
            <Link to="https://personal-site-abdillahmufki.netlify.app/">
              <li>
                <a className="text-white font-bold text-md">Portfolio</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Button text="Get Started" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
