import React from 'react';
import './projects.scss';
import SliderProjects from "../../../components/Slider/SliderProjects";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h3 className="projects__title title">Projects</h3>
        <div className="projects__content">
          <SliderProjects />
        </div>
      </div>
    </section>
  );
};

export default Projects;