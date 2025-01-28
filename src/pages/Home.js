import React from 'react';
import './Home.css';
import linevLogo from '../assets/linev.jpg'; // Logo dosyasını import edin

const Home = () => {
  const workExperience = [
    {
      company: 'LineV',
      role: 'Backend Developer',
      duration: '2 Months',
      description: 'We developed a game server project on the FiveM platform using the GTA V game, primarily using Lua and JavaScript languages. I was part of this development team for 2 months. During this time, I improved my skills in team collaboration, crisis management, work environment, task assignment, and reporting. Additionally, I enhanced my proficiency in Lua and JavaScript.',
      logo: linevLogo
    }
    // {
    //   company: 'Company Two',
    //   role: 'Frontend Developer',
    //   duration: 'Jan 2018 - Dec 2019',
    //   description: 'Developed responsive web applications using HTML, CSS, and JavaScript.',
    //   logo: '/path/to/company-two-logo.png'
    // },
    // {
    //   company: 'Company Three',
    //   role: 'Intern',
    //   duration: 'Jun 2017 - Dec 2017',
    //   description: 'Assisted in the development of internal tools and applications.',
    //   logo: '/path/to/company-three-logo.png'
    // }
  ];

  return (
    <main>
      <section className="intro">
        <h1>Welcome!</h1>
        <p>Hi, I'm Dağhan. I have been involved in software development for a long time and I am a software student. This site is a website I created both to improve myself and for portfolio purposes.</p>
      </section>
      <section className="work-experience">
        <h2>Work Experience</h2>
        <div className="work-experience-cards">
          {workExperience.map((job, index) => (
            <div key={index} className="work-card">
              <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
              <div className="work-details">
                <h3>{job.company}</h3>
                <p><strong>Role:</strong> {job.role}</p>
                <p><strong>Duration:</strong> {job.duration}</p>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;