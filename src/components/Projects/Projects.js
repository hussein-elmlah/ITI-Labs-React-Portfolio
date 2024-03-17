import React from 'react';
import ProjectCard from '../../reusableComponents/ProjectCard/ProjectCard.js';

const Projects = ({ projectsImgsArr }) => {
  return (
    <section id="sectionProjects" className="bg-body-secondary text-black">
      <div className="container text-center">
        <h2>PORTFOLIO</h2>
        <div className="row">
          {projectsImgsArr.map((imageSrc, index) => (
            <ProjectCard key={index} imageSrc={imageSrc} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
