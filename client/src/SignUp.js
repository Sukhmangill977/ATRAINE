import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    FieldofInterest: "",
    profilePhoto: null
  });

  const [fileName, setFileName] = useState("Upload Profile Photo");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(credentials).forEach(key => {
      formData.append(key, credentials[key]);
    });

    try {
      const res = await axios.post('api/auth/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      alert("Error signing up");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setCredentials({ ...credentials, profilePhoto: files[0] });
      setFileName(files[0].name);
    } else {
      setCredentials({ ...credentials, [name]: value });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Sign Up</h2>
        <Link to="/internship-form" className="google-form-link">
          <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path d="M5.646 4.646a.5.5 0 0 1 .708 0L11 8.293 6.354 12.646a.5.5 0 0 1-.708-.708L10.293 8 5.646 4.646a.5.5 0 0 1 0-.708z"/>
          </svg>
          Fill out our Internship/Training Application Form
        </Link>
        <form onSubmit={handleSignUp} encType="multipart/form-data">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="signup-input"
            value={credentials.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signup-input"
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signup-input"
            value={credentials.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="signup-input"
            value={credentials.phone}
            onChange={handleChange}
          />
          <select
            name="gender"
            className="signup-select"
            value={credentials.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="FieldofInterest"
            placeholder="Field of Interest"
            className="signup-input"
            value={credentials.FieldofInterest}
            onChange={handleChange}
          />
          <div className="custom-file-upload">
            <input
              type="file"
              name="profilePhoto"
              id="profilePhoto"
              className="signup-file"
              onChange={handleChange}
            />
            <label htmlFor="profilePhoto">{fileName}</label>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
