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
        <li>
          <strong>Personal Information:</strong> Name, email address, phone number, and other contact details. We will only collect personal information that is necessary to provide our services or that you voluntarily provide to us.
        </li>
        <li>
          <strong>Usage Data:</strong> Information on how our services are accessed and used, such as IP addresses, browser type, and browsing behavior. We may collect this information through cookies and similar tracking technologies, in accordance with applicable Indian data protection laws.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> Data collected through cookies and similar tracking technologies to enhance user experience and analyze usage patterns. We will obtain your consent before placing cookies on your device, except for cookies that are strictly necessary for the operation of our website. You can withdraw your consent at any time by adjusting your browser settings or contacting us.
        </li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide and maintain our services</li>
        <li>To notify you about changes to our services</li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so that we can improve our services, but only in a way that does not identify you personally.
        </li>
        <li>To monitor the usage of our services</li>
        <li>To detect, prevent, and address technical issues</li>
        <li>
          To send you marketing and promotional materials, but only with your consent. You can opt out of receiving marketing communications at any time.
        </li>
      </ul>

      <h3>3. Disclosure of Your Information</h3>
      <p>
        We may share your information in the following situations, but only in accordance with applicable Indian data protection laws:
      </p>
      <ul>
        <li>With service providers to facilitate our services</li>
        <li>To comply with legal obligations</li>
        <li>To protect and defend our rights or property</li>
        <li>To prevent or investigate possible wrongdoing in connection with our services</li>
        <li>To protect the personal safety of users of our services or the public</li>
        <li>With your consent</li>
      </ul>

      <h3>4. Data Localization (Optional)</h3>
      <p>
        [If applicable] We may store your personal information on servers located in India. However, we may also transfer your personal information to servers located outside of India for the purposes described in this Privacy Policy. We will take all reasonable steps to ensure that your personal information is treated securely and in accordance with applicable data protection laws, including entering into standard contractual clauses approved by the competent Indian authority.
      </p>

      <h3>5. Your Data Protection Rights</h3>
      <p>
        Depending on your location, you may have the following rights regarding your personal information:
      </p>
      <ul>
        <li>The right to access – You have the right to request copies of your personal information.</li>
        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
        <li>The right to erasure – You have the right to request that we erase your personal information, under certain conditions.</li>
        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
        <li>The right to object to processing – You have the right to object to our processing of your personal information, under certain conditions.</li>
        <li>
          The right to data portability – You have the right to request that we transfer the data we have collected about you to another organization, or directly to you, under certain conditions.
        </li>
      </ul>

      <h3>6. Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy, or if you wish to exercise any of your data protection rights, please contact us:
      </p>
      <ul>
        <li>By email: email-abluehorse000006@gmail.com</li>
        <li>By visiting this page on our website: <Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;