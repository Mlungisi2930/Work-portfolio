import React from 'react';
import './App.css'; 
// --- Logo Import ---
import profileImage from './assets/os.png'; 


// --- PROFILE AND PLACEHOLDER IMAGES ---
import aboutProfilePic from './assets/unnamed.jpg'; 
// Note: The import for './assets/my.jpg' was permanently removed to fix compilation errors.

// *** Hero Profile Pic imported (MLU.jpg) ***
import heroProfilePic from './assets/MLU.jpg'; 
// ---------------------------------------------


// --- PROJECT IMAGES FOR PORTFOLIO SECTION ---
import mathoboImage from './assets/mathobo.PNG'; 
import bankImage from './assets/Bank system account.PNG';
import supportImage from './assets/Support.PNG';
import movieImage from './assets/Movie.PNG';
import resumeImage from './assets/Resume.PNG';
import sentimentImage from './assets/sentiment.PNG'; 
// ---------------------------------------------

// --- SERVICE ICONS FOR SERVICES SECTION ---
import marketingIcon from './assets/marketing.png'; 
import websiteIcon from './assets/website.png';
import graphicIcon from './assets/graphic.png';
import appIcon from './assets/app.png'; 
// ------------------------------------------

// --- NEW SKILL ICONS FOR SKILLS SECTION ---
import htmlIcon from './assets/html.png'; 
import cssIcon from './assets/css.png';
import nodeIcon from './assets/Node.jpg';
import javascriptIcon from './assets/Javascript.png';
import reactIcon from './assets/react.jpg';
import figmaIcon from './assets/Figma.jpg';
import javaIcon from './assets/Java.png';
import mySQLIcon from './assets/My SQL.jpg';
import gitIcon from './assets/Git.png';
// *** Python icon imported ***
import pythonIcon from './assets/Python.PNG'; 
// ------------------------------------------


// --- 1. Navigation & Hero (Home) ---
const HeaderSection = () => (
    <header id="home" className="header-section">
        <nav className="navbar">
            <div className="logo">  
                <img src={profileImage} alt="Mlungisi Mvubu" className="hero-image" height={100} width={150}/>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="hero-content">
            <div className="hero-text">
                <h1>Mlungisi Mvubu</h1>
                <h2>And I'm a <span className="highlight">Full stack Developer & AI Enthusiast</span></h2>
                <p>Experienced Full-Stack Developer with a passion for crafting robust and scalable web applications. Proficient in both front-end and back-end technologies, I specialize in bringing ideas to life through elegant code and intuitive user experiences. My expertise spans specific front-end tech, e.g., React, HTML5, CSS, Java Script for dynamic interfaces and 
                    specific back-end tech, e.g., Node.js, Python/Django, Java/Spring boot for powerful server-side logic and database management.</p>
                {/* *** REWORKED: Using <a> tags and flex styling for spacing *** */}
                <div className="hero-actions" style={{ display: 'flex', gap: '15px' }}>
                    <a href="/download/cv" className="btn primary">Download CV</a>
                    <a href="/download/certificates" className="btn primary">Certificates</a>
                    <a href="#portfolio" className="btn secondary">Portfolio</a>
                </div>
                {/* Note: 'Bagdes' section simplified, add social icons here */}
                <div className="social-icons">
                    {/* Icons from 1.PNG */}
                </div>
            </div>
            <div className="hero-image-container">
              {/* *** IMAGE INSERTION for Hero Section *** */}
              <img 
                  src={heroProfilePic} 
                  alt="Mlungisi Mvubu Hero Profile" 
                  className="hero-profile-image" 
                  // Styles for proper fitting
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
        </div>
    </header>
);

// --- 2. About Me ---
const AboutSection = () => (
    <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
            {/* Personal Info Card (Left Column) */}
            <div className="about-col personal-summary">
                <div className="profile-pic-placeholder">
                    {/* *** IMAGE INSERTION for About Me Profile Pic *** */}
                    <img src={aboutProfilePic} alt="Mlungisi Mvubu Profile" className="profile-image" />
                </div>
                <div className="info-text-box">
                    <h3>Mlungisi Mvubu</h3>
                    <p>Full Stack Developer</p>
                    <p>Digital Marketeer</p>
                    <p>Graphic Designer</p>
                </div>
            </div>

            {/* Qualifications & Experience (Right Column) */}
            <div className="about-col details">
                <div className="info-block">
                    <h3>Education Qualification</h3>
                    <p><strong>System Development NQF Level 05</strong></p>
                    <p>Institute: Lucid Technologies Training Center | Session: 2021-2022 | Result: NQF Level 05 SD Certificate</p>
                    <p><strong>Technical Support NQF Level 04</strong></p>
                    <p>Institute: Matiwane FET College | Session: 2023-2024 | Result: NQF Level 04</p>
                    <p><strong>Secondary School Certificate (SSC)</strong></p>
                    <p>Institute: Sebenzakusakhaya Secondary School | Result: Grade 12</p>
                </div>

                <div className="info-block half-grid">
                    <div>
                        <h3>Short Course</h3>
                        <p>Coursera Online courses</p>
                        <p>Artificial Intelligent AI Bootcamp</p>
                        <p>IBM Full Stack Software Developer Professional certificate</p>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <p><strong>CAPACITI Talent Development</strong></p>
                        <p>Session: 2025-2026 | Occupation: Intern Junior Software Developer</p>
                        <p><strong>Lucid Technologies</strong></p>
                        <p>Session: 2022-2023 | Occupation: Intern Website developer</p>
                    </div>
                </div>

                <div className="info-block">
                    <h3>Reference</h3>
                    <p><strong>Name:</strong>  Oarabile Mogase | <strong>Company</strong> : CAPACITI Talent Development Accelerator | <strong>Occupation</strong>: IT Talent Mentor | **Contact:** 067 642 251</p>
                     <p><strong>Name:</strong>K Mouse | **Company:** Lucid Technologies | **Occupation:** Training Manager | **Contact:**083 388 2933</p>
                </div>
            </div>
        </div>
    </section>
);

// --- 3. My Skills ---
const SkillsSection = () => {
    const skillsData = [
        { name: 'HTML - 5', level: 90, icon: htmlIcon }, 
        { name: 'CSS - 3', level: 80, icon: cssIcon },
        { name: 'Node.js', level: 80, icon: nodeIcon }, 
        { name: 'Java Script', level: 70, icon: javascriptIcon },
        { name: 'React', level: 70, icon: reactIcon }, 
        { name: 'Figma', level: 90, icon: figmaIcon },
        { name: 'Python', level: 75, icon: pythonIcon }, 
        { name: 'Java', level: 70, icon: javaIcon },
        { name: 'My SQL', level: 75, icon: mySQLIcon }, 
        { name: 'Git', level: 80, icon: gitIcon },
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-info">
                            <div className="skill-icon-container">
                                {skill.icon ? (
                                    <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon-img" />
                                ) : (
                                    <div className={`skill-icon-placeholder`}>?</div> 
                                )}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                        <div className="skill-bar-container">
                            <div 
                                className="skill-bar-fill" 
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                         <span className="skill-percentage">{`${skill.level}%`}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- 4. My Services ---
const ServicesSection = () => {
    const services = [
        { 
            title: 'Digital Marketer', 
            icon: marketingIcon, 
            description: 'A results-obsessed digital marketer with 4 years of experience in architecture and executing data-led marketing campaigns. My expertise lies in connecting the dots between SEO, content marketing, and brand authority, and drive every effort contributes to the bottom line.' 
        },
        { 
            title: 'Web Development', 
            icon: websiteIcon, 
            description: 'I am a full-stack developer passionate about building digital experiences from the ground up, with a sharp eye for front-end design and a firm understanding of back-end logic. I create fast, secure, and maintainable products.' 
        },
        { 
            title: 'Graphic Design', 
            icon: graphicIcon, 
            description: 'As a graphic designer with a focus on UI/UX, I believe great design lives at the intersection of aesthetics and functionality, guiding users seamlessly through a website while reinforcing brand trust and clarity.' 
        },
        { 
            title: 'Mobile App & Web App', 
            icon: appIcon, 
            description: 'I build seamless digital experiences for both mobile and web. I specialize in creating responsive web applications that share a common core of performance, usability, and clean design.' 
        },
    ];

    return (
        <section id="services" className="services-section">
            <h2 className="section-title">My Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon-container">
                            <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <button className="btn primary">Hire Me</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- 5. My Portfolio (from 3.PNG) ---
const PortfolioSection = () => {
    const projects = [
        // Updated projects with image sources
        { name: 'Mthombo Ngashi NPO', link: 'https://mthombo-ngashi-npo-unicorn-dfb917.netlify.app/', image: mathoboImage },
        { name: 'Bank Account System', link: 'bank-account-system.onrender.com/', image: bankImage },
        { name: 'Support Ticket System', link: 'support-ticket-system-1.onrender.com/', image: supportImage },
        { name: 'Movie DB', link: 'movie-db-rust-pi.vercel.app', image: movieImage },
        { name: 'Resume Builder', link: 'keamo0713.github.io/ResumeBuilder/', image: resumeImage },
        { name: 'Company Dashboard', link: '/https/companysentimentaldashboardmock.onrender.com', image: sentimentImage },
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <h2 className="section-title">My Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        {/* Now using project.image */}
                        <div className="project-image-placeholder">
                            <img src={project.image} alt={`${project.name} preview`} className="project-image" />
                        </div> 
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">{project.name}</a>
                        <p className="project-url">{project.link}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- 6. Contact Me (from 3.PNG) ---
const ContactSection = () => (
    <section id="contact" className="contact-section">
        <h2 className="section-title">Contact <span className="highlight">Me</span></h2>
        <div className="contact-content-grid">
            <div className="contact-info-block">
                {/* Logo image uses the restored profileImage variable */}
                <div className="logo-small"><img src={profileImage} alt="Mlungisi Mvubu" className="hero-image" height={100} width={150}/></div>
                <p className="info-text">A passionate and results-driven software developer skilled in designing, coding, testing, and maintaining software applications. I excel at writing clean, efficient code and collaborating effectively to meet project goals.</p>
                <div className="social-icons">
                    {/* Placeholder for Phone, LinkedIn, etc. icons */}
                </div>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="tel" placeholder="Phone" />
                <input type="text" placeholder="Subject" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="btn primary submit-btn">Submit</button>
            </form>
        </div>
    </section>
);

// --- 7. Footer ---
const Footer = () => (
    <footer className="footer">
        <p>© 2024 Mlungisi Mvubu. All rights reserved.</p>
    </footer>
);


// --- Main App Component ---
function App() {
  return (
    <div className="portfolio-app">
      <HeaderSection />
      <main>
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;