import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Project Detail</h2>
      <p>Details for project {id}</p>
    </div>
  );
};

export default ProjectDetail;