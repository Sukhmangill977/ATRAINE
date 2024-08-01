import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Profile = () => {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]); 
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        const userRes = await axios.get('http://localhost:5001/api/users/profile', {
          headers: {
            'token': token
          }
        });

        const applicationsRes = await axios.get('http://localhost:5001/api/internships/applications', {
          headers: {
            'token': token
          }
        });

        setUser(userRes.data);
        setApplications(applicationsRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to the login page
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-background">
      <div className="profile-container">
        {user.profilePhoto && <img src={`data:image/jpeg;base64,${user.profilePhoto}`} alt="Profile" className="profile-photo" />}
        <h2>Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Gender: {user.gender}</p>
        <p>Field of Interest: {user.FieldofInterest}</p> {/* Displaying the FieldofInterest */}
        <h2>Internship Applications</h2>
        {applications.map(app => (
          <div key={app._id}>
            <h3>Application for {app.preferredProgram}</h3>
            <p>Full Name: {app.fullName}</p>
            <p>Email: {app.email}</p>
            <p>Phone: {app.phone}</p>
            <p>Address: {app.address}</p>
            <p>Institution: {app.institution}</p>
            <p>Degree: {app.degree}</p>
            <p>Year of Study: {app.yearOfStudy}</p>
            <p>Preferred Start Date: {app.startDate}</p>
            <p>Preferred End Date: {app.endDate}</p>
            <p>Areas of Interest: {app.interestAreas}</p>
            <p>Skills: {app.skills}</p>
            <p>Previous Experience: {app.experience}</p>
            <p>Portfolio: {app.portfolio}</p>
            <p>Comments: {app.comments}</p>
          </div>
        ))}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Profile; // Ensure this line is present
