import React from 'react';
import './App.css'; 
import React from 'react';

// --- 1. Navigation & Hero (Home) ---
const HeaderSection = () => (
    <header id="home" className="header-section">
        <nav className="navbar">
            <div className="logo">Mvubu</div>
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
                <p>Experienced Full Stack Developer with a passion for crafting robust and scalable web applications. Proficient in both front-end and back-end technologies, I specialize in bringing ideas to life through elegant code and intuitive user experiences.</p>
                <div className="hero-actions">
                    <button className="btn primary">Download CV</button>
                    <button className="btn secondary">Portfolio</button>
                </div>
                {/* Note: 'Bagdes' section simplified, add social icons here */}
                <div className="social-icons">
                    {/* Icons from 1.PNG */}
                </div>
            </div>
            <div className="hero-image-container">
                {/* Image from 1.PNG */}
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
                    {/* Image from 1.PNG */}
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
                    <p>Institute: Lucid Technologies Training Center | Session: 2020-2022 | Result: NQF Level 05 SD Certificate</p>
                    <p><strong>Technical Support NQF Level 04</strong></p>
                    <p>Institute: Multiverse FET College | Session: 2022-2024 | Result: NQF Level 04</p>
                    <p><strong>Secondary School Certificate (SSC)</strong></p>
                    <p>Institute: Seberaskusakhaya Secondary School | Result: Grade 12</p>
                </div>

                <div className="info-block half-grid">
                    <div>
                        <h3>Short Course</h3>
                        <p>Courzen Online courses</p>
                        <p>Artificial Intelligent AI Bootcamp</p>
                        <p>IBM Full Stack Software Developer Professional certificate</p>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <p><strong>CAMACITI Talent Development</strong></p>
                        <p>Session: 2025-2026 | Occupation: Junior Software Developer</p>
                        <p><strong>Lucid Technologies</strong></p>
                        <p>Session: 2022-2023 | Occupation: Website developer</p>
                    </div>
                </div>

                <div className="info-block">
                    <h3>Reference</h3>
                    <p><strong>Name:</strong> Osnabile Megase | **Company:** CAMACITI | **Occupation:** IT Talent Mentor | **Contact:** 067 642 251</p>
                    {/* Add second reference if needed */}
                </div>
            </div>
        </div>
    </section>
);

// --- 3. My Skills (from 2.PNG) ---
const SkillsSection = () => {
    const skillsData = [
        { name: 'HTML - 5', level: 90 }, { name: 'CSS - 3', level: 80 },
        { name: 'Node.js', level: 80 }, { name: 'Java Script', level: 70 },
        { name: 'React', level: 70 }, { name: 'Figma', level: 90 },
        { name: 'Python', level: 75 }, { name: 'Java', level: 70 },
        { name: 'My SQL', level: 75 }, { name: 'Git', level: 80 },
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-info">
                            {/* Icon placeholder (as seen in 2.PNG) */}
                            <div className={`skill-icon icon-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}></div>
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

// --- 4. My Services (from 2.PNG) ---
const ServicesSection = () => {
    const services = [
        { 
            title: 'Digital Marketer', 
            description: 'A results-obsessed digital marketer with 4 years of experience in architecture and executing data-led marketing campaigns. My expertise lies in connecting the dots between SEO, content marketing, and brand authority, and drive every effort contributes to the bottom line.' 
        },
        { 
            title: 'Web Development', 
            description: 'I am a full-stack developer passionate about building digital experiences from the ground up, with a sharp eye for front-end design and a firm understanding of back-end logic. I create fast, secure, and maintainable products.' 
        },
        { 
            title: 'Graphic Design', 
            description: 'As a graphic designer with a focus on UI/UX, I believe great design lives at the intersection of aesthetics and functionality, guiding users seamlessly through a website while reinforcing brand trust and clarity.' 
        },
        { 
            title: 'Mobile App & Web App', 
            description: 'I build seamless digital experiences for both mobile and web. I specialize in creating responsive web applications that share a common core of performance, usability, and clean design.' 
        },
    ];

    return (
        <section id="services" className="services-section">
            <h2 className="section-title">My Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        {/* Icon placeholder */}
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
        { name: 'Mthombo Ngashi NPO', link: 'https://mthombo-ngashi-npo-unicorn-dfb917.netlify.app/' },
        { name: 'Bank Account System', link: 'bank-account-system.onrender.com/' },
        { name: 'Support Ticket System', link: 'support-ticket-system-1.onrender.com/' },
        { name: 'Movie DB', link: 'movie-db-rust-pi.vercel.app' },
        { name: 'Resume Builder', link: 'keamo0713.github.io/ResumeBuilder/' },
        { name: 'Company Dashboard', link: '/https/companysentimentaldashboardmock.onrender.com' },
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <h2 className="section-title">My Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        {/* Image Placeholder - Referencing 3.PNG content */}
                        <div className="project-image-placeholder"></div> 
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
                <div className="logo-small">Mvubu</div>
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
// --- 1. Navigation & Hero (Home) ---
export const HeaderSection = () => (
    <header id="home" className="header-section">
        <nav className="navbar">
            <div className="logo">Mvubu</div>
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
                <p>Experienced Full Stack Developer with a passion for crafting robust and scalable web applications. Proficient in both front-end and back-end technologies, I specialize in bringing ideas to life through elegant code and intuitive user experiences.</p>
                <div className="hero-actions">
                    <button className="btn primary">Download CV</button>
                    <button className="btn secondary">Portfolio</button>
                </div>
                {/* Note: 'Bagdes' section simplified, add social icons here */}
                <div className="social-icons">
                    {/* Icons from 1.PNG */}
                </div>
            </div>
            <div className="hero-image-container">
                <img src {...unnamed.jpg} alt='mlungisi' />
            </div>
        </div>
    </header>
);
