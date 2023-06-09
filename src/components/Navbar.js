import React from "react";
import Plus from "../assets/img/landingPage/plus.png";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="lg:bg-white lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 flex justify-items-center items-center w-full ">
      <img src={Plus} alt="logo" className="h-10 pr-4 pl-2 mt-2" />
      <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2">
        <Link to="/">Patient Care</Link>
      </h1>
      <ul className="flex ml-auto w-60 justify-evenly font-lato font-semibold ">
        <li>
          <Link to="/" className="text-[17px] mr-10" >Home</Link>
        </li>
        <li>
          <Link to="/login-about" className="text-[17px] mr-10">About</Link>
        </li>
        <li>
          <Link to="/login-contact" className="text-[17px] mr-10">Contact</Link>
        </li>
      </ul>
      {/* <button
          className="bg-primary py-2 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary ml-6"
          // onClick={handleLogout}
        >
          <Link to="/blog">My Blog</Link>
        </button> */}
        <button className="bg-primary rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary py-2 px-3 ml-6">
          {location.pathname === "/register" ? (
            <Link to="/">Login</Link>
          ) : (
            <Link to="/register">Register</Link>
          )}
        </button>
      
    </nav>
  );
}
