import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import image1 from '../assets/image1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A simple website project developed with the support of artificial intelligence in approximately 4 hours. It is a project I created just because I was bored and wanted to improve myself.',
      image: image1
    }
  ];

  const handleProjectClick = () => {
    toast.info('Daha fazla detay bulunmuyor');
  };

  return (
    <main className="projects-container">
      <ToastContainer />
      <section className="projects-intro">
        <h1>My Projects</h1>
        <p>Here are some of the projects I have worked on.</p>
      </section>
      <section className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            onClick={handleProjectClick}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;