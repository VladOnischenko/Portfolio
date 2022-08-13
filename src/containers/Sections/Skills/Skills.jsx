import React, {useContext} from 'react';
import './skills.scss'
import Progress from "../../../components/Progress/Progress";
import {ThemeProvider} from "../../../App";

const Skills = () => {
  const theme = useContext(ThemeProvider)

  return (
    <section className={theme ? "skills" : "skills skills-dark"}>
      <div className="container">
        <h3 className="skills__title title">Skills</h3>
        <div className="skills__content">
          <div className="skills__img main-img">
            <img src="../images/1.jpg" alt="myPhoto"/>
          </div>
          <ul className="skills__feature">
            <li><span>HTML</span><Progress done="90"/></li>
            <li><span>CSS</span><Progress done="85"/></li>
            <li><span>React, React Hooks</span><Progress done="75"/></li>
            <li><span>Redux, Redux thunk</span><Progress done="65"/></li>
            <li><span>JavaScript</span><Progress done="70"/></li>
            <li><span>Node.js, MongoDB</span><Progress done="30"/></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;