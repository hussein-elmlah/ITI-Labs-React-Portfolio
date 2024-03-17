import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageSrc, index }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imageSrc} alt={`Project ${index + 1}`} />
        <div className="card-description">
          <p>PROJECT {index + 1}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
