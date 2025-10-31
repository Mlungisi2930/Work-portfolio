import React, { useState } from 'react';
import './../styles/Contact.css'; // Component-specific styles

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to an API endpoint
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! (Simulated submission)');
    // Reset form
    setFormData({ firstName: '', lastName: '', phone: '', subject: '', email: '', message: '' });
  };

  return (
    <div className="contact-section">
      <h2>Contact <span className="highlight">Me</span></h2>
      <div className="contact-grid">
        <div className="contact-info-block">
            {/* Content from the 'Mvubu' description and icons */}
            <p className="info-logo">Mvubu</p>
            <p className="info-text">A passionate and results-driven software developer skilled in designing, coding, testing, and maintaining software applications. I excel at writing clean, efficient code and collaborating effectively to meet project goals.</p>
            <div className="social-icons">
                {/* Placeholder for icons (e.g., Font Awesome) */}
                <a href="#"><i className="icon-phone"></i></a>
                <a href="#"><i className="icon-mail"></i></a>
                <a href="#"><i className="icon-linkedin"></i></a>
                <a href="#"><i className="icon-facebook"></i></a>
            </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} />
          <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
          <textarea name="message" placeholder="Message" rows="5" onChange={handleChange} value={formData.message} required></textarea>
          <button type="submit" className="btn primary submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;