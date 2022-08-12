import React, {useState} from 'react';
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import './themeButton.scss'

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div >
      <div className="theme__wrapper">
        <div className="switch-checkbox">
          <label className="switch">
            <input className="switch-input" type="checkbox" onClick={() => setDarkMode(!darkMode)} />
            <div className="icons-box">
              <span className="switch-general night"><BsFillMoonFill /></span>
              <span className="switch-general sun"><BsFillSunFill />︎</span>
              <span className="circle round"></span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

// className={darkMode ? "dark-mode" : "light-mode"}

export default ThemeButton;