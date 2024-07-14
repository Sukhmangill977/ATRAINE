// client/src/PrivacyPolicy.js
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Privacy Policy</h2>
      <p>
        At ATRAINE, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. By using our website and services, you agree to the collection and use of information in accordance with this policy.
      </p>
      
      <h3>1. Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
        <li><strong>Usage Data:</strong> Information on how our services are accessed and used, such as IP addresses, browser type, and browsing behavior.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies and similar tracking technologies to enhance user experience and analyze usage patterns.</li>
      </ul>
      
      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide and maintain our services</li>
        <li>To notify you about changes to our services</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our services</li>
        <li>To monitor the usage of our services</li>
        <li>To detect, prevent, and address technical issues</li>
        <li>To send you marketing and promotional materials</li>
      </ul>
      
      <h3>3. Disclosure of Your Information</h3>
      <p>We may share your information in the following situations:</p>
      <ul>
        <li>With service providers to facilitate our services</li>
        <li>To comply with legal obligations</li>
        <li>To protect and defend our rights or property</li>
        <li>To prevent or investigate possible wrongdoing in connection with our services</li>
        <li>To protect the personal safety of users of our services or the public</li>
        <li>With your consent</li>
      </ul>
      
      <h3>4. Security of Your Information</h3>
      <p>We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      
      <h3>5. Your Data Protection Rights</h3>
      <p>Depending on your location, you may have the following rights regarding your personal information:</p>
      <ul>
        <li>The right to access – You have the right to request copies of your personal information.</li>
        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
        <li>The right to erasure – You have the right to request that we erase your personal information, under certain conditions.</li>
        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
        <li>The right to object to processing – You have the right to object to our processing of your personal information, under certain conditions.</li>
        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
      </ul>
      
      <h3>6. Changes to This Privacy Policy</h3>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
      
      <h3>7. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: email-atraine@gmail.com</li>
        <li>By visiting this page on our website: <Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy;
