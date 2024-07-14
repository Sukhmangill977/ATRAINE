import React from 'react';
import { Link } from 'react-router-dom';
import './PerksPage.css'; // Ensure PerksPage.css is imported

const PerksPage = () => {
  return (
    <div className="perks-page">
      <div className="perks-box">
        <h3>Perks for You</h3>
        <p>
          At ATRAINE, our tech firm is dedicated to empowering students with invaluable industry experience through our comprehensive internship programs. We offer:
        </p>
        <ul>
          <li>
            Certificates of Completion: Upon successful completion of our internship programs, students receive a certificate recognizing their dedication and accomplishments.{' '}
            <Link to="/certificate-sample">View Sample Certificate</Link>
          </li>
          <li>
            Letters of Recommendation: Our mentors provide personalized letters of recommendation, highlighting the skills, achievements, and contributions of each intern, aiding their future career pursuits.{' '}
            <Link to="/recommendation-sample">View Sample Recommendation</Link>
          </li>
          <li>
            Practical Experience: Interns gain hands-on experience by working on real-world projects, applying their knowledge in practical settings, and solving actual industry challenges.
          </li>
          <li>
            Mentorship and Guidance: Our experienced professionals offer continuous mentorship and guidance, ensuring interns receive constructive feedback and support throughout their journey with us.
          </li>
        </ul>
        <p>
          At ATRAINE, we are committed to nurturing the next generation of tech leaders by providing top-notch training and internship programs that pave the way for successful careers.
        </p>
      </div>
    </div>
  );
}

export default PerksPage;
