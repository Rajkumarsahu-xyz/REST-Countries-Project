import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "./ThemeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`mode-btn ${
        isDarkMode ? "darkModeElement" : "lightModeElement"
      }`}
    >
      <IoMoonOutline />
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
