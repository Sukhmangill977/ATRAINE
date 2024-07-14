// client/src/TrainingDetails45Days.js
import React from 'react';
import './TrainingDetails45days.css';

const googleFormLink = "https://docs.google.com/forms/your-google-form-link"; // Replace with your actual Google Form link

const TrainingDetails45Days = () => {
  return (
    <div className="training-details" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="internship-box">
        <h1>Internship for 45 Days</h1>
        <p>
          ATRAINE offers a comprehensive 45-day internship program designed to immerse you in your chosen technology stack. During the internship, you will work on practical assignments and projects, gaining hands-on experience under the guidance of industry experts. Regular evaluations will track your progress, ensuring you meet our high standards. Upon successful completion, you will receive a Letter of Recommendation (LOR) and a Certificate of Completion.
        </p>
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
      </div>
      <div className="training-box">
        <h1>Training for 45 Days</h1>
        <p>
          ATRAINE offers a structured 45-day training program tailored to enhance your skills in your chosen technology stack. The training includes intensive teaching sessions and practical assignments to deepen your understanding and proficiency. You will receive personalized feedback and guidance from our instructors throughout the training. Upon completion, you will be awarded a Letter of Recommendation (LOR) and a Certificate of Completion.
        </p>
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
      </div>
    </div>
  );
}

export default TrainingDetails45Days;
