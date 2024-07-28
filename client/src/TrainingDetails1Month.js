// client/src/TrainingDetails1Month.js
import React from 'react';
import './TrainingDetails1Month.css';

const googleFormLink = "https://docs.google.com/forms/your-google-form-link"; // Replace with your actual Google Form link

const TrainingDetails1Month = () => {
  return (
    <div className="training-details" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="internship-box">
        <h1>Internship for 1 Month</h1>
        <p>
          At ATRAINE, we provide a comprehensive 1-month internship program tailored to your chosen technology stack. During the internship, you will be assigned tasks to work on and evaluated. Upon successful completion, you will receive a Letter of Recommendation (LOR) and a Certificate of Completion.
        </p>
        <p>
          <strong>Available Courses:</strong>
          <ul>
            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>DevOps</li>
            <li>Web Semantics</li>
          </ul>
        </p>
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
      </div>
      <div className="training-box">
        <h1>Training for 1 Month</h1>
        <p>
          ATRAINE offers a structured 1-month training program in your desired technology stack. The training involves regular teaching sessions and practical assignments. You will be assessed based on your understanding and performance. Upon completion, you will be awarded a Letter of Recommendation (LOR) and a Certificate of Completion.
        </p>
        <p>
          <strong>Available Courses:</strong>
          <ul>
            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>DevOps</li>
            <li>Web Semantics</li>
          </ul>
        </p>
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
      </div>
    </div>
  );
}

export default TrainingDetails1Month;
