import React from 'react';
import './Projects.css';

const Projects = ({ theimagearr }) => {
  return (
    <section id="sectionProjects" className="bg-body-secondary text-black">
      <div className="container text-center">
        <h2>PORTFOLIO</h2>
        <div className="row">
          {theimagearr.map((imageSrc, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={imageSrc} alt={`Project ${index + 1}`} />
                <div className="card-description">
                  <p>PROJECT {index + 1}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
