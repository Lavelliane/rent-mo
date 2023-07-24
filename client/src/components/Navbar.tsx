import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="w-full border-b xl:px-36 px-4 border-none bg-black bg-opacity-40 shadow-searchbox">
        <div className="py-5 md:py-0 container mx-auto px-2 flex items-center justify-between">
          <div aria-label="Home. logo" role="img">
            <img
              className="w-24 md:w-36 sm:w-32 lg:w-48 xl:w-48"
              src="../src/assets/logo/RentMo-logo.svg"
              alt="logo"
            />
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : ""
              } sm:block md:hidden text-dark800 focus:text-dark800 focus:outline-none focus:ring-2 focus:ring-dark800`}
            >
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden icon icon-tabler icon-tabler-menu"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button>
            <div
              id="menu"
              className={` ${show ? "" : "hidden"} md:block lg:block bg-transparent `}
            >
              <button
                onClick={() => setShow(!show)}
                className={`block md:hidden lg:hidden text-dark200 hover:text-yellow focus:text-yellow fixed focus:outline-none focus:ring-2 focus:ring-yellow z-30 top-0 right-6 mt-6`}
              >
                <svg
                  aria-label="close main menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-dark900 md:bg-transparent z-20 transition">
                <li className="text-white  cursor-pointer text-base lg:text-lg pt-10 md:pt-0 transition">
                  <Link
                    to="/how-it-works"
                    className=" hover:text-yellow transition"
                  >
                    How it works
                  </Link>
                </li>
                <li className="text-white  cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition">
                  <Link
                    to="/support"
                    className=" hover:text-yellow transition"
                  >
                    Support
                  </Link>
                </li>
                <li className="text-yellow font-bold cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition">
                  <Link
                    to="/become-a-host"
                    className=" hover:text-white hover:ring-white transition ring-yellow ring-2 rounded-full py-4 px-8 "
                  >
                    Become a host
                  </Link>
                </li>
                <span className=" xl:mx-10 md:mt-0 md:w-[2px] md:h-10 bg-dark600 bg-white md:mx-5 w-3/4 h-[1px] mt-14"></span>
                <li className="text-white  cursor-pointer text-base lg:text-lg pt-10 md:pt-0 transition">
                  <Link
                    to="/login"
                    className=" hover:text-yellow transition"
                  >
                    Login
                  </Link>
                </li>
                <li className="text-white cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition">
                  <Link
                    to="/register"
                    className=" hover:text-yellow transition"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;