import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Terms & Conditions</h2>
      <p>Welcome to ATRAINE. Please read these Terms & Conditions carefully before using our services.</p>

      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

      <h3>2. Changes to Terms</h3>
      <p>We may update these Terms & Conditions from time to time. The updated version will be posted on this page, and we encourage you to review it regularly.</p>

      <h3>3. Use of Services</h3>
      <p>
        Our services are intended for users who are at least 18 years old. By using our services, you represent and warrant that you meet this age requirement. In accordance with the Information Technology Act, 2000 of India, this minimum age is established.
      </p>

      <h3>4. User Conduct</h3>
      <p>When using our services, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information.</li>
        <li>Comply with all applicable laws and regulations, including Indian data protection laws.</li>
        <li>Not use our services for any unlawful or prohibited purposes.</li>
        <li>Not infringe on the rights of others.</li>
        <li>Not disrupt or interfere with the security or functionality of our services.</li>
      </ul>

      <h3>5. Intellectual Property</h3>
      <p>All content on our website, including text, graphics, logos, and images, is the property of ATRAINE and is protected by copyright and other intellectual property laws. You may not use any content without our prior written consent.</p>

      <h3>6. Disclaimer of Warranties</h3>
      <p>Our services are provided on an "as is" and "as available" basis. We do not warrant that our services will be uninterrupted, error-free, or free from viruses or other harmful components.</p>

      <h3>7. Limitation of Liability</h3>
      <p>To the fullest extent permitted by law, ATRAINE shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.</p>

      <h3>8. Indemnification</h3>
      <p>You agree to indemnify, defend, and hold harmless ATRAINE, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, and expenses arising out of or related to your use of our services.</p>

      <h3>9. Governing Law and Dispute Resolution</h3>
      <p>
        These Terms & Conditions shall be governed by and construed in accordance with the laws of [Your Registered Jurisdiction in India], without regard to its conflict of law principles. In the event of a dispute arising out of or relating to these Terms & Conditions, you agree to attempt to resolve the dispute through informal negotiation. If the dispute is not resolved within a reasonable time (e.g., 30 days), you agree that the dispute shall be settled by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 (India).
      </p>

      <h3>10. Contact Us</h3>
      <p>If you have any questions about these Terms & Conditions, please contact us:</p>
      <ul>
        <li>By email: email-bluehorse000006@gmail.com</li>
        <li>By visiting this page on our website: <Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default TermsConditions;