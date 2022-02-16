import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeDark, setThemeLight } from "../redux/themeRedux";

const Toggle = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="transition duration-500 ease-in-out rounded-full">
      {theme === "dark" ? (
        <p
          onClick={() => dispatch(setThemeLight())}
          className="text-gray-500 dark:text-gray-400  cursor-pointer"
        >
          light
        </p>
      ) : (
        <p
          onClick={() => dispatch(setThemeDark())}
          className="text-gray-500 dark:text-gray-400  cursor-pointer"
        >
          dark
        </p>
      )}
    </div>
  );
};

export default Toggle;
