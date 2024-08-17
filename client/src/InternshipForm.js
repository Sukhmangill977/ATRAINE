import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './InternshipForm.css'; 
import paytm from "../src/images/paytm.png"

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    institution: "",
    degree: "",
    yearOfStudy: "",
    preferredProgram: "",
    startDate: "",
    endDate: "",
    interestAreas: "",
    skills: "",
    experience: "",
    resume: null,
    portfolio: "",
    comments: "",
    consent: false,
    agreement: false,
    paymentScreenshot: null // Add paymentScreenshot to formData state
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'resume' || name === 'paymentScreenshot') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach(key => {
      form.append(key, formData[key]);
    });

    try {
      const res = await axios.post('http://localhost:5001/api/internships/apply', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res.status === 200) {
        navigate("/signup");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="form-container">
      <h2>Internship/Training Application Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3>Basic Information</h3>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />

        <h3>Educational Background</h3>
        <input type="text" name="institution" placeholder="Current Educational Institution" value={formData.institution} onChange={handleChange} required />
        <input type="text" name="degree" placeholder="Degree/Program" value={formData.degree} onChange={handleChange} required />
        <input type="text" name="yearOfStudy" placeholder="Year of Study" value={formData.yearOfStudy} onChange={handleChange} required />

        <h3>Internship/Training Details</h3>
        <select name="preferredProgram" value={formData.preferredProgram} onChange={handleChange} required>
          <option value="">Select Program</option>
          <option value="1-month">1-month</option>
          <option value="45-days">45-days</option>
          <option value="6-months">6-months</option>
        </select>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
        <input type="text" name="interestAreas" placeholder="Areas of Interest" value={formData.interestAreas} onChange={handleChange} required />

        <h3>Skills and Experience</h3>
        <input type="text" name="skills" placeholder="Relevant Skills" value={formData.skills} onChange={handleChange} required />
        <textarea name="experience" placeholder="Previous Internship/Training Experience" value={formData.experience} onChange={handleChange} required></textarea>
        <input type="file" name="resume" onChange={handleChange} required />

        <h3>Payment Information</h3>
        <div className="qr-code-section">
          <p>Scan the QR code below to make the payment.</p> 
          <img src={paytm} alt="QR Code" className="qr-code-image" />
          Add the payment screenshot below
          <input type="file" name="paymentScreenshot" onChange={handleChange} required /> 
        </div>

        <h3>Additional Information</h3>
        <input type="url" name="portfolio" placeholder="Portfolio/LinkedIn Profile" value={formData.portfolio} onChange={handleChange} required />
        <textarea name="comments" placeholder="Additional Comments or Questions" value={formData.comments} onChange={handleChange}></textarea>

        <h3>Consent and Agreement</h3>
        <label>
          I consent to the collection of my data for the purpose of this application.
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
        </label>
        <label>
          I agree to the terms and conditions of the internship/training program.
          <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/signup")}>Back</button>
      </form>
    </div>
  );
};

export default InternshipForm;
