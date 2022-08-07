import React from 'react';
import './header.scss'
import ThemeButton from "../../components/ThemeButton/ThemeButton";

const lightHeader = {
  background: 'rgb(198, 108, 73, 0.3) url(../images/main-bg.jpg) no-repeat center center',
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
}

const Header = () => {
  return (
    <header className="header" style={lightHeader}>
      <div className="container">
        <nav className="nav">
          <h4 className="nav__logo">Portfolio</h4>
          <div className="nav__themeMode">
            <ThemeButton />
          </div>
        </nav>
        <div className="header__content">
          <h1 className="header__title">Hi, I'm <span>Vlad Onischenko</span></h1>
          <p className="header__subtitle">Front-end Developer from Urkaine</p>
          <span className="header__link">Latest works</span>
        </div>
        <div className="center">
          <svg width="20" height="50" viewBox="0 0 50 130">
            <rect id="scroll" x="0" y="5" rx="25" ry="25" width="50" height="100" stroke="#FFF" fill="none" strokeWidth="4"></rect>
            <circle id="circle--shape" cx="25" cy="32" r="9" fill="#FFF"></circle>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;