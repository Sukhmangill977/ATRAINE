import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if token is not present
          return;
        }

        const userRes = await axios.get('https://atraine.onrender.com/api/users/profile/', {
          headers: {
            'token': token
          }
        });

        const applicationsRes = await axios.get('https://atraine.onrender.com/api/internships/applications', {
          headers: {
            'token': token
          }
        });

        setUser(userRes.data);
        setApplications(applicationsRes.data);
      } catch (err) {
        console.error(err);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); 
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div className="profile-background">
      <div className="profile-container">
        {user.profilePhoto && <img src={`data:image/jpeg;base64,${user.profilePhoto}`} alt="Profile" className="profile-photo" />}
        <h2>Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Field of Interest:</strong> {user.FieldofInterest}</p>
        <h2>Internship Applications</h2>
        {applications.length > 0 ? (
          applications.map(app => (
            app.email === user.email && (
              <div key={app._id} className="application">
                <h3>Application for {app.preferredProgram}</h3>
                <p><strong>Full Name:</strong> {app.fullName}</p>
                <p><strong>Email:</strong> {app.email}</p>
                <p><strong>Phone:</strong> {app.phone}</p>
                <p><strong>Address:</strong> {app.address}</p>
                <p><strong>Institution:</strong> {app.institution}</p>
                <p><strong>Degree:</strong> {app.degree}</p>
                <p><strong>Year of Study:</strong> {app.yearOfStudy}</p>
                <p><strong>Preferred Start Date:</strong> {app.startDate}</p>
                <p><strong>Preferred End Date:</strong> {app.endDate}</p>
                <p><strong>Areas of Interest:</strong> {app.interestAreas}</p>
                <p><strong>Skills:</strong> {app.skills}</p>
                <p><strong>Previous Experience:</strong> {app.experience}</p>
                <p><strong>Portfolio:</strong> {app.portfolio}</p>
                <p><strong>Comments:</strong> {app.comments}</p>
              </div>
            )
          ))
        ) : (
          <p>No applications found.</p>
        )}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
