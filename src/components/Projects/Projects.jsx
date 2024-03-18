import React from 'react';
import ProjectCard from '../../reusableComponents/ProjectCard/ProjectCard';

const Projects = ({ projectsImgsArr }) => {
  return (
    <section id="sectionProjects" className="bg-body-secondary text-black">
      <div className="container text-center">
        <h2>PORTFOLIO</h2>
        <div className="row">
          {projectsImgsArr.map((imageSrc, index) => (
            <ProjectCard key={`projectsImg-${index}`} index={index} imageSrc={imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
