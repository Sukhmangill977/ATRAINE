// client/src/TrainingDetails6Month.js
import React from 'react';
import './TrainingDetails6Month.css';
import { Link } from 'react-router-dom'; 

// const googleFormLink = "https://docs.google.com/forms/your-google-form-link"; // Replace with your actual Google Form link

const TrainingDetails6Month = () => {
  return (
    <div className="training-details" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="internship-box">
        <h1>Internship for 6 Months</h1>
        <p>
          At ATRAINE, we provide an extensive 6-month internship program where you will immerse yourself in your chosen technology stack. Throughout the internship, you will work on real-world projects, collaborate with our team, and gain hands-on experience. You will be assigned progressively challenging tasks and projects, allowing you to develop your skills and knowledge under the guidance of experienced mentors. Regular evaluations and feedback sessions will help track your progress and ensure you're meeting our high standards. Upon successful completion, you will receive a Letter of Recommendation (LOR) and a Certificate of Completion.
        </p>
        <h2>Courses Offered:</h2>
        <ul>
          <li>MERN (MongoDB, Express.js, React.js, Node.js)</li>
          <li>C++ Programming</li>
          <li>DevOps Practices</li>
          <li>Web Development</li>
        </ul>
        <li><Link to="/signup">Apply Now</Link></li><li><Link to="/signup">Apply Now</Link></li>
      </div>
      <div className="training-box">
        <h1>Training for 6 Months</h1>
        <p>
          ATRAINE offers a structured 6-month training program designed to equip you with in-depth knowledge and practical skills in your chosen technology stack. The program includes comprehensive learning modules, hands-on projects, and regular assessments to ensure your understanding and growth. Our instructors will guide you through advanced topics and industry best practices, preparing you for the challenges of the professional world. Throughout the training, you will have opportunities to engage with industry experts, participate in workshops, and collaborate with fellow learners. Upon successful completion, you will receive a Letter of Recommendation (LOR) and a Certificate of Completion.
        </p>
        <h2>Courses Offered:</h2>
        <ul>
          <li>MERN (MongoDB, Express.js, React.js, Node.js)</li>
          <li>C++ Programming</li>
          <li>DevOps Practices</li>
          <li>Web Development</li>
        </ul>
        <li><Link to="/signup">Apply Now</Link></li>
      </div>
    </div>
  );
}

export default TrainingDetails6Month;
