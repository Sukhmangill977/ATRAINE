import React from 'react';
import { Link } from 'react-router-dom';
import './Trainings.css';

const Trainings = () => {
  return (
    <div className="trainings">
      <h2>Our Services </h2>
      <div className="training-list">
        <div className="training-item">
          <h3>1 Month Internship/Training</h3>
          <p>Intensive short-term program to gain practical skills.</p>
          <Link to="/trainings/1-month" className="more-info-button">More Info</Link>
        </div>
        <div className="training-item">
          <h3>45 Days Internship/Training</h3>
          <p>Intermediate program to deepen your knowledge and skills.</p>
          <Link to="/trainings/45-days" className="more-info-button">More Info</Link>
        </div>
        {/* <div className="training-item">
          <h3>6 Months Internship/Training</h3>
          <p>Comprehensive program for an in-depth learning experience.</p>
          <Link to="/trainings/6-months" className="more-info-button">More Info</Link>
        </div> */}
        <div className="training-item">
          <h3>Perks for You</h3>
          <p>
            At ATRAINE, our tech firm is dedicated to empowering students with invaluable industry experience through our comprehensive internship programs. We offer:
          </p>
          <Link to="/perks" className="more-info-button">More Info</Link>
        </div>
      </div>
    </div>
  );
}

export default Trainings;
