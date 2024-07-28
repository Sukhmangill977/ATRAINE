// client/src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to ATRAINE</h1>
        <p>Providing top-notch training and internships for students.</p>
      </header>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Transforming Education</h2>
            <p>Explore our training programs and kickstart your career journey.</p>
            <Link to="/trainings">
              <button>Trainings We Provide</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="additional-content">
        {/* <div className="box left-box">
          <ImageSlider />
        </div> */}
        <div className="box right-box">
          <Link to="/perks" className="perks-link">Check Out Our Perks</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
