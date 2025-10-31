import React from 'react';
import './../styles/Skills.css'; // Component-specific styles

const skillsData = [
  { name: 'HTML - 5', level: 90, icon: 'html' },
  { name: 'Node.js', level: 80, icon: 'nodejs' },
  { name: 'React', level: 70, icon: 'react' },
  { name: 'Python', level: 75, icon: 'python' },
  { name: 'My SQL', level: 75, icon: 'mysql' },
  { name: 'CSS - 3', level: 80, icon: 'css' },
  { name: 'Java Script', level: 70, icon: 'js' },
  { name: 'Figma', level: 90, icon: 'figma' },
  { name: 'Java', level: 70, icon: 'java' },
  { name: 'Git', level: 80, icon: 'git' },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-info">
              {/* Placeholder for icon - In a real app, use an SVG component or icon library */}
              <div className={`skill-icon icon-${skill.icon}`}></div>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar-fill" 
                style={{ width: `${skill.level}%` }}
              ></div>
              <span className="skill-percentage">{`${skill.level}%`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;