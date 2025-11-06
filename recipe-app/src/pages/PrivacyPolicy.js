
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">Privacy Policy</h1>
      <p><strong>Effective Date: September 11, 2025</strong></p>

      <p>This Privacy Policy describes how FoodClone ("we," "us," or "our") collects, uses, and discloses your information when you use our website and services (the "Service").</p>

      <h2 className="mt-4">1. Information We Collect</h2>
      <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
      <ul>
        <li><strong>Personal Information:</strong> We do not directly collect personally identifiable information such as your name, email address, or phone number unless you voluntarily provide it to us (e.g., through a contact form).</li>
        <li><strong>Usage Data:</strong> We may collect information about how you access and use the Service. This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</li>
      </ul>

      <h2 className="mt-4">2. How We Use Your Information</h2>
      <p>FoodClone uses the collected data for various purposes:</p>
      <ul>
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our Service</li>
        <li>To monitor the usage of our Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <h2 className="mt-4">3. Disclosure Of Your Information</h2>
      <p>We may disclose your personal information in the good faith belief that such action is necessary to:</p>
      <ul>
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of FoodClone</li>
        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>To protect the personal safety of users of the Service or the public</li>
        <li>To protect against legal liability</li>
      </ul>

      <h2 className="mt-4">4. Security Of Data</h2>
      <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

      <h2 className="mt-4">5. Links To Other Sites</h2>
      <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
      <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

      <h2 className="mt-4">6. Changes To This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      <h2 className="mt-4">7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: privacy@foodclone.com</li>
        <li>By visiting this page on our website: <Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
