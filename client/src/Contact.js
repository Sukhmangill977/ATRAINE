// client/src/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001//contacts/add', {
        name,
        email,
        message,
      });
      setResponseMessage(response.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or need further information, feel free to reach out to us.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
}

export default Contact;
