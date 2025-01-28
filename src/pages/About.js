import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // Profil fotoğrafınızı import edin
import jsLogo from '../assets/logos/js.png'; // JavaScript logosunu import edin
import luaLogo from '../assets/logos/lua.png'; // React logosunu import edin
import htmlLogo from '../assets/logos/html.png'; // HTML logosunu import edin
import cssLogo from '../assets/logos/css.png'; // CSS logosunu import edin
import cSharpLogo from '../assets/logos/csharp.png'; // Git logosunu import edin

const About = () => {
  const skills = [
    { name: 'Lua', logo: luaLogo },
    { name: 'C#', logo: cSharpLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo }
  ];

  return (
    <main className="about-container">
      <section className="about-intro">
        <img src={profilePic} alt="Profile" className="profile-pic-about" />
        <div className="about-details">
          <h1>About Me</h1>
          <p>Hi, I'm Dağhan and I'm 18 years old. I have been involved in software development for a long time and I am a software student. This site is a website I created both to improve myself and for portfolio purposes.</p>
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default About;