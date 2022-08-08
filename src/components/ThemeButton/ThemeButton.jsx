import React, {useState} from 'react';
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import './themeButton.scss'

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div >
      <div className="theme__wrapper">
        <div className="switch-checkbox">
          <label className="switch">
            <span style={{ color: "yellow", fontSize: "10px" }}><BsFillSunFill />︎</span>
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
            <span style={{ color: "#c96dfd", fontSize: "10px" }}><BsFillMoonFill /></span>
          </label>
        </div>
      </div>
    </div>
  );
};

// className={darkMode ? "dark-mode" : "light-mode"}

export default ThemeButton;