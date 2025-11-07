import React, { useState, useEffect, useRef, useCallback } from 'react'; // 💥 UPDATED: Import useEffect, useRef, useCallback for Canvas
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

// *** NEW: Social Media Icon Imports (Using the provided filenames) ***
import facebookIcon from './assets/facebook.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import whatsappIcon from './assets/whatapp.png';
import emailIcon from './assets/email.png';
// --------------------------------------------------------------------

// 💥 NEW IMPORT: Background Image for Hero Section 💥
import heroBackground from './assets/background.jpg';

// 💥 FIX: Frame Image is now handled purely by CSS for a modern look 💥
// import heroFrameImage from './assets/frame2.jpg'; // REMOVED: Using CSS for frame


// --- Common Social Icons Component ---
// This component will be reused in the Header and Contact sections
const SocialIcons = ({ size = '30px' }) => (
    <div className="social-icons" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <a href="https://www.facebook.com/mlungisi.mvubu/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" style={{ width: size, height: size }} />
        </a>
        <a href="https://www.linkedin.com/in/mlungisi-mvubu-35535230a/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" style={{ width: size, height: size }} />
        </a>
        <a href="https://github.com/Mlungisi2930" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" style={{ width: size, height: size }} />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" style={{ width: size, height: size }} />
        </a>
    </div>
);


// --- 1. Navigation & Hero (Home) ---
const HeaderSection = () => {
    // 💥 NEW: State for mobile menu visibility 💥
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 💥 NEW: Function to toggle menu 💥
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 💥 NEW: Function to close menu on link click 💥
    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };


    return (
        // 💥 FIX: Added inline style to apply the background image 💥
        <header id="home" className="header-section" style={{ backgroundImage: `url(${heroBackground})` }}>
            {/* NEW: Added overlay for text visibility */}
            <div className="hero-overlay"></div>
            <nav className="navbar">
                <div className="logo">
                    <img src={profileImage} alt="Mlungisi Mvubu" className="hero-image" height={100} width={150}/>
                </div>
                {/* 💥 MODIFIED: 'open' class is now toggled on the button itself 💥 */}
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
                    onClick={toggleMenu} 
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                {/* 💥 FIX: Conditionally apply 'open' class for CSS 💥 */}
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {/* 💥 FIX: Add onClick handler to close menu on navigation 💥 */}
                 
                    <li><a href="#about" onClick={handleNavLinkClick}><strong><span className="highlight">About</span></strong></a></li>
                    <li><a href="#skills" onClick={handleNavLinkClick}><strong>Skills</strong></a></li>
                    <li><a href="#services" onClick={handleNavLinkClick}><strong><span className="highlight">Services</span></strong></a></li>
                  
                    <li><a href="#contact" onClick={handleNavLinkClick}><strong>Contact</strong></a></li>
                </ul>
            </nav>
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Mlungisi <span className="highlight"> Mvubu </span></h1>
                    <h2>And I'm a <span className="highlight">Full stack Developer & AI Enthusiast</span></h2>
                    <p>Experienced Full-Stack Developer with a passion for crafting robust and scalable web applications. Proficient in both front-end and back-end technologies, I specialize in bringing ideas to life through elegant code and intuitive user experiences. My expertise spans specific front-end tech, e.g., React, HTML5, CSS, Java Script for dynamic interfaces and
                        specific back-end tech, e.g., Node.js, Python/Django, Java/Spring boot for powerful server-side logic and database management.</p>
                    {/* *** REWORKED: Using <a> tags and flex styling for spacing *** */}
                    <div className="hero-actions" style={{ display: 'flex', gap: '15px' }}>
                        
                        {/* 🌟 DOWNLOAD CV LINK MODIFIED 🌟 */}
                        <a 
                            href="/Mlungisi_Mvubu_CV.pdf" // 👈 Update path to your CV file
                            download="Mlungisi_Mvubu_CV." // 👈 Suggests a filename for download
                            className="btn primary"
                        >
                            Download CV
                        </a>
                        
                        {/* 🌟 DOWNLOAD CERTIFICATES LINK MODIFIED 🌟 */}
                        <a 
                            href="/certificates.zip" // 👈 Assumes certificates are zipped for easy download
                            download="Mlungisi_Mvubu_certificates" // 👈 Suggests a filename for download
                            className="btn primary"
                        >
                            Certificates
                        </a>
                        
                        {/* 🌟 PORTFOLIO LINK MODIFIED (Points to the section) 🌟 */}
                        <a href="#portfolio" className="btn secondary">
                            Portfolio
                        </a>
                    </div>
                    {/* *** NEW: Social Icons added under the action buttons *** */}
                    <SocialIcons size="35px" />
                </div>
                {/* 💥 FIX: Using a single container for a professional CSS frame 💥 */}
                <div className="hero-image-container">
                <div className="hero-profile-frame">
                    {/* Profile Picture is the only content inside the frame div */}
                    <img
                        src={heroProfilePic}
                        alt="Mlungisi Mvubu Hero Profile"
                        className="hero-profile-image"
                    />
                </div>
                </div>
            </div>
        </header>
    );
};

// --- NEW: Marquee Section (UNTOUCHED as requested) ---
const MarqueeSection = () => (
    <div className="marquee-container">
        <div className="marquee-content">
            <p>Prompt engineering 👨🏼‍💻👨🏼‍💻 <span className="highlight">Data Science 📊📈</span>
Machine learning 🤖🧠 <span className="highlight">AI Automation 👾✨</span> Generative AI 👨🏻‍💻🚀</p>
        </div>
    </div>
);



// --- 2. About Me (FIXED: Re-adding 'dark-info-block' for the background color change) ---
const AboutSection = () => (
    <section id="about" className="about-section">
        <h2 className="section-title">About <span className="highlight"> Me</span></h2>
        <div className="about-grid">
            {/* Personal Info Card (Left Column) - Remains unchanged */}
            <div className="about-col personal-summary">
                <div className="profile-pic-placeholder">
                    {/* *** IMAGE INSERTION for About Me Profile Pic *** */}
                    <img src={aboutProfilePic} alt="Mlungisi Mvubu Profile" className="profile-image" />
                </div>
                <div className="info-text-box">
                    <h3>Mlungisi Mvubu</h3>
                    <p><strong>Full Stack Developer</strong></p>
                    <p><strong>Digital Marketeer</strong></p>
                    <p><strong>Graphic Designer</strong></p>
                </div>
            </div>

            {/* Qualifications & Experience (Right Column) */}
            <div className="about-col details">
                <div className="info-block dark-info-block"> {/* 👈 CLASS RE-ADDED */}
                    <h3>Education Qualification</h3>
                    <p><strong><span className="highlight"> System Development NQF Level 05</span></strong></p>
                    <p>Institute: Lucid Technologies Training Center | Session: 2021-2022 | Result: NQF Level 05 SD Certificate</p>
                    <p><strong><span className="highlight"> Technical Support NQF Level 04</span></strong></p>
                    <p>Institute: Matiwane FET College | Session: 2023-2024 | Result: NQF Level 04</p>
                    <p><strong><span className="highlight"> Secondary School Certificate (SSC)</span></strong></p>
                    <p>Institute: Sebenzakusakhaya Secondary School | Result: Grade 12</p>
                </div>

                <div className="info-block half-grid dark-info-block"> {/* 👈 CLASS RE-ADDED */}
                    <div>
                        <h3>Short Course</h3>
                        <p><span className="highlight"> Coursera Online courses</span></p>
                        <p>Artificial Intelligent AI Bootcamp</p>
                        <p>IBM Full Stack Software Developer Professional certificate</p>
                    </div>
                    <div>
                        <h3><span className="highlight"> Experience</span></h3>
                        <p><strong><span className="highlight"> CAPACITI Talent Development</span></strong></p>
                        <p>Session: 2025-2026 | Occupation: Intern Junior Software Developer</p>
                        <p><strong><span className="highlight"> Lucid Technologies</span></strong></p>
                        <p>Session: 2022-2023 | Occupation: Intern Website developer</p>
                    </div>
                </div>

                <div className="info-block dark-info-block"> {/* 👈 CLASS RE-ADDED */}
                    <h3>Reference</h3>
                    <p><strong><span className="highlight"> Name:</span></strong>  Oarabile Mogase | <strong><span className="highlight"> Company</span></strong> : CAPACITI Talent Development Accelerator | <strong><span className="highlight"> Occupation</span></strong>: IT Talent Mentor |<strong><span className="highlight"> Contact</span></strong> : 067 642 2151</p>
                     <p><strong><span className="highlight"> Name:</span></strong>K Mouse | <strong><span className="highlight"> Company</span></strong>: Lucid Technologies | <strong><span className="highlight"> Occupation</span></strong>:Training Manager | <strong><span className="highlight"> Contact</span></strong>:083 388 2933</p>
                </div>
            </div>
        </div>
    </section>
);


// 💥 NEW COMPONENT: Star Background using HTML Canvas 💥
const StarBackground = () => {
    const canvasRef = useRef(null);
    const starCount = 300;
    const stars = useRef([]);
    let animationFrameId = null;

    const generateStars = useCallback((width, height) => {
        const newStars = [];
        for (let i = 0; i < starCount; i++) {
            newStars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * width, // depth
                size: Math.random() * 2,
                color: 'rgba(255, 255, 255, ' + (0.5 + Math.random() * 0.5) + ')',
            });
        }
        stars.current = newStars;
    }, []);

    const draw = useCallback((ctx, width, height) => {
        const speed = 1.5; // Controls the rotation/movement speed
        const center = { x: width / 2, y: height / 2 };

        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slight trail effect
        ctx.fillRect(0, 0, width, height);
        
        // You can comment out the two lines above and use these two for a no-trail background:
        // ctx.clearRect(0, 0, width, height); 
        // ctx.fillStyle = '#111827'; // Dark background for the section
        // ctx.fillRect(0, 0, width, height);


        for (let i = 0; i < starCount; i++) {
            const star = stars.current[i];
            
            // 1. Update Z (Move star towards the viewer)
            star.z -= speed; 

            // If star passes the viewer (z <= 0), reset it far away
            if (star.z <= 0) {
                star.z = width; 
            }

            // 2. Calculate projected 2D coordinates
            const k = 128 / star.z; // Perspective factor
            const px = star.x * k + center.x;
            const py = star.y * k + center.y;
            const psize = star.size * k; // Size scales with distance

            // 3. Draw the star
            if (px > 0 && px < width && py > 0 && py < height) {
                ctx.beginPath();
                ctx.arc(px, py, psize, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.fill();
            }
        }
    }, []);

    const render = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;

        draw(ctx, width, height);
        animationFrameId = requestAnimationFrame(render);
    }, [draw]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement;

        // Set initial canvas dimensions to parent container
        const resizeCanvas = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            generateStars(canvas.width, canvas.height); // Regenerate stars on resize
        };

        // Initial setup
        resizeCanvas();

        // Start animation
        animationFrameId = requestAnimationFrame(render);

        // Handle resize events
        window.addEventListener('resize', resizeCanvas);

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [render, generateStars]);

    // Added a className for CSS positioning
    return <canvas ref={canvasRef} className="star-background-canvas" />;
};


// --- 3. My Skills (No Change - Stars already implemented) ---
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
        // 💥 SECTION WITH STARS 💥
        <section id="skills" className="skills-section skills-with-stars">
            {/* 💥 Star Background Component placed first (bottom layer) 💥 */}
            <StarBackground />
            
            {/* 💥 CONTENT WRAPPER: Ensures content is above the background and centered 💥 */}
            <div className="skills-content-wrapper"> 
                <h2 className="section-title">My <span className="highlight">Skills </span> </h2>
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
            </div>
        </section>
    );
};

// --- 4. My Services (No Change) ---
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
            <h2 className="section-title">My <span className="highlight"> Services</span></h2>
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

// --- 5. My Portfolio (No Change) ---
const PortfolioSection = () => {
    const projects = [
        // Updated projects with image sources
        { name: 'Mthombo Ngashi NPO', link: 'https://mthombo-ngashi-npo-unicorn-dfb917.netlify.app/', image: mathoboImage },
        { name: 'Bank Account System', link: 'https://bank-account-system.onrender.com/', image: bankImage },
        { name: 'Support Ticket System', link: 'https://support-ticket-system-1.onrender.com/', image: supportImage },
        { name: 'Movie DB', link: 'https://movie-db-rust-pi.vercel.app', image: movieImage },
        { name: 'Resume Builder', link: 'https://keamo0713.github.io/ResumeBuilder/', image: resumeImage },
        { name: 'Company Dashboard', link: 'https://companysentimentaldashboardmock.onrender.com', image: sentimentImage },
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <h2 className="section-title">My <span  className="highlight">Portfolio</span></h2>
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

// --- 6. Contact Me (💥 REWORKED WITH STARS 💥) ---
const ContactSection = () => (
    <section id="contact" className="contact-section contact-with-stars"> {/* 1. Add positioning class */}
        <StarBackground /> {/* 2. Add Star Background */}

        {/* 3. Wrap content for correct layering (z-index) */}
        <div className="contact-content-wrapper"> 
            <h2 className="section-title">Contact <span className="highlight">Me</span></h2>
            <div className="contact-content-grid">
                <div className="contact-info-block">
                    {/* Logo image uses the restored profileImage variable */}
                    <div className="logo-small"><img src={profileImage} alt="Mlungisi Mvubu" className="hero-image" height={100} width={150}/></div>
                    <p className="info-text">A passionate and results-driven software developer skilled in designing, coding, testing, and maintaining software applications. I excel at writing clean, efficient code and collaborating effectively to meet project goals.</p>
                    {/* *** NEW: Social Icons added in the contact info block *** */}
                    <SocialIcons size="30px" />
                </div>
                {/* 💥 WEBFORM INTEGRATION: Formspree URL with hash ID for security/reliability 💥 */}
                <form 
                    className="contact-form"
                    // Using the hash ID 'xwpwgqdn' assuming it points to mvubum26@gmail.com
                    action={`https://formspree.io/f/xwpwgqdn`}
                    method="POST"
                >
                    {/* IMPORTANT: Added 'name' attributes for form submission */}
                    <input type="text" name="First_Name" placeholder="First Name" required />
                    <input type="text" name="Last_Name" placeholder="Last Name" required />
                    <input type="tel" name="Phone" placeholder="Phone" />
                    <input type="text" name="Subject" placeholder="Subject" required />
                    <input type="email" name="_replyto" placeholder="Email" required /> {/* _replyto is used by Formspree for the sender's email */}
                    <textarea name="Message" placeholder="Message" rows="5" required></textarea>
                    <button type="submit" className="btn primary submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
);

// --- 7. Floating WhatsApp Component (No Change) ---
const FloatingWhatsApp = () => (
    <a
        href="https://wa.me/27764066951" // Replace with your number
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#25D366' // WhatsApp brand color
        }}
    >
        <img src={whatsappIcon} alt="WhatsApp" style={{ width: '35px', height: '35px' }} />
    </a>
);


// --- 8. Footer (No Change) ---
const Footer = () => (
    <footer className="footer">
        <p>© 2024 Mlungisi Mvubu. All rights reserved.</p>
    </footer>
);


// --- Main App Component (No Change) ---
function App() {
  return (
    <div className="portfolio-app">
      <HeaderSection />
      {/* 💥 FIX: CALLING THE MARQUEE HERE 💥 */}
      <MarqueeSection />
      <main>
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      {/* *** Floating WhatsApp Component added at the bottom of the App *** */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;