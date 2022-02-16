import React from "react";
import Toggle from "./themeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      Title <Toggle />
    </div>
  );
};

export default Navbar;
