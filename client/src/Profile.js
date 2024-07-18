import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const res = await axios.get('https://atraine.onrender.com/api/users/profile/', {
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
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Education Level: {user.EducationLevel}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
      <p>Phone: {user.phone}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
};

export default Profile;

