import React from 'react';
import './about.scss'
import {Button} from "@mui/material";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h3 className="title">About Me</h3>
        <div className="about__content">
          <div className="about__description">
            <p>I’m a self-motivated and goal-oriented front-end developer with
              a focus on clean-code based web apps.Easily trained and aimed to
              do everything at the highest level.Like new challenges and constantly
              keep improving my skills.Ready to show my full devotion and involvement
              in a creative and motivated team.
            </p>
            <Button className="about__button" href="https://www.linkedin.com/in/vladonischenko/overlay/1635494292398/single-media-viewer/" target="_blank">Download CV</Button>
          </div>
          <div className="main-img">
            <img src="../images/2.jpg" alt="myPhoto"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;