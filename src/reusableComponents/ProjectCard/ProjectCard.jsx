import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageSrc, index }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        {!(index%2) && <div className="evenProject position-absolute w-100 h-100 shadow-lg d-flex justify-content-start align-items-start ps-2 fw-bold fs-4"><span className='text-info'>EvenProject</span></div> }
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
