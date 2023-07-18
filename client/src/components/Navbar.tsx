import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Registration from "./Registration.tsx"
import "../index.css";

const Navbar = () => {
  
  return (
    <nav className="h-20 w-full">
    <ul className=" px-[14%] pt-7">
      <li className="flex justify-between items-center">
        <img
          className=" w-48 inline justify-start no-select"
          src="../src/assets/logo/RentMo-logo.svg"
        ></img>
        <div className="flex gap-10 text-white text-base items-center">
          <Link to="/how-it-works" className="hover:opacity-80 transition-opacity">
            How it works
          </Link>
          <Link to="/support" className="hover:opacity-80 transition-opacity">
            Support
          </Link>
          <Link to="/become-a-host" className="hover:opacity-80 transition-opacity">
            Become a host
          </Link>
          <span className=" w-[2px] h-10 bg-dark600"></span>
          <Link to="/login" className="hover:opacity-80 transition-opacity">
            Login
          </Link>
          <Link to="/register" className="hover:opacity-80 transition-opacity">
            Sign up
          </Link>
        </div>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;