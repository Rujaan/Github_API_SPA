import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./themeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-10 ">
      <div className="flex justify-between items-center flex-grow">
        <Link to="/">
          <p className=" dark:text-white text-black">Github API Search</p>
        </Link>
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
