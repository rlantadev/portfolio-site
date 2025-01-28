import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProjectCard;