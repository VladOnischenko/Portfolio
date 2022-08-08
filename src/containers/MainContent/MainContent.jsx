import React from 'react';
import './mainContent.scss'
import About from "../Sections/About/About";
import Skills from "../Sections/Skills/Skills";

const MainContent = () => {
  return (
    <main className="main">
        <About />
        <Skills />
    </main>
  );
};

export default MainContent;