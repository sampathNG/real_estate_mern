import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="bg-blue-200 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="flex flex-warp text-sm sm:text-xl font-bold">
            <span className="text-blue-500 pr-5">Sampath</span>
            <span className="text-blue-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-blue-100 p-3 rounded-lg flex">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search"
          />
          <FaSearch className="bg-transparent text-red-700" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-500 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-500 hover:underline ">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="hidden sm:inline text-slate-500 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
