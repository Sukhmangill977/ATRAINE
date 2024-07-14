// client/src/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-box">
        <h2>About ATRAINE</h2>
        <p>
          ATRAINE is dedicated to providing top-notch training and internship programs to help students excel in their careers. Our programs are designed to offer hands-on experience and valuable industry insights.
        </p>
        <div className="about-section">
          <h3>Why We Started</h3>
          <p>
            We founded ATRAINE with a clear vision: to revolutionize the way students prepare for their careers. Recognizing the challenges many face in accessing quality training and meaningful internships, we aimed to provide a solution that is both accessible and enriching.
          </p>
        </div>
        <div className="about-section">
          <h3>How We Started</h3>
          <p>
            ATRAINE was born out of a passion for education and a desire to make a meaningful impact on the lives of students. With a team of experienced professionals and educators, we set out to create a platform where learning transcends traditional boundaries, offering affordable yet high-quality programs tailored to industry needs.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Vision</h3>
          <p>
            Our vision extends beyond mere education; we aspire to cultivate a generation of skilled professionals equipped to thrive in dynamic workplaces. By offering hands-on projects, mentorship opportunities, and exposure to cutting-edge technologies, we aim to empower students to confidently pursue their career aspirations.
          </p>
          <ul>
            <li><strong>Affordability:</strong> We believe in making quality education accessible to all, offering competitive pricing without compromising on excellence.</li>
            <li><strong>Experience and Exposure:</strong> Our programs are designed to provide real-world experience and exposure to industry best practices, preparing students for the challenges of tomorrow’s workforce.</li>
            <li><strong>Industry-Relevant Curriculum:</strong> With input from industry experts, our curriculum is meticulously crafted to align with current trends and demands, ensuring our graduates are job-ready from day one.</li>
          </ul>
        </div>
        <p>Join us at ATRAINE and embark on a transformative journey towards a successful career.</p>
      </div>
    </div>
  );
}

export default About;
