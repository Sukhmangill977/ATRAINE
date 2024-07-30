// client/src/Profile.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Profile.css'; // Create and import the CSS file

const Profile = () => {
  const [profile, setProfile] = useState({});
  
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        if (!token) throw new Error('No token found');

        const res = await axios.get('http://localhost:5001/api/users/profile/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile-background">
      <div className="profile-container">
        <h2>Profile</h2>
        {profile.profilePhoto && (
          <img
            src={`http://localhost:5001/${profile.profilePhoto}`}
            alt="Profile"
            className="profile-photo"
          />
        )}
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        {/* <p>Education Level: {profile.bio}</p>
        <p>Age: {profile.age}</p>
        <p>Address: {profile.address}</p> */}
        <p>Phone: {profile.phone}</p>
        <p>Gender: {profile.gender}</p>
        <p>Field of Interest: {profile.FieldofInterest}</p>
      </div>
    </div>
  );
};

export default Profile;
