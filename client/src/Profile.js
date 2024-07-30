import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const res = await axios.get('http://localhost:5001/api/users/profile/', {
          headers: {
            'token': token
          }
        });

        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

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
      </div>
    </div>
  );
};

export default Profile;
