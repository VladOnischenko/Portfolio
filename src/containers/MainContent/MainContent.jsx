import React from 'react';
import About from "../Sections/About/About";
import Skills from "../Sections/Skills/Skills";
import Projects from "../Sections/Projects/Projects";

const MainContent = () => {
  return (
    <main className="main">
        <About />
        <Skills />
        <Projects />
    </main>
  );
};

export default MainContent;