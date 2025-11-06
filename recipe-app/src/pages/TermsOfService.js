
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">Terms of Service</h1>
      <p><strong>Effective Date: September 11, 2025</strong></p>

      <p>Welcome to FoodClone! These Terms of Service ("Terms") govern your use of the FoodClone website and services (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

      <h2 className="mt-4">1. Use of the Service</h2>
      <p>FoodClone provides a platform for discovering and exploring recipes. You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service.</p>

      <h2 className="mt-4">2. Intellectual Property</h2>
      <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of FoodClone and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FoodClone.</p>

      <h2 className="mt-4">3. Links To Other Web Sites</h2>
      <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by FoodClone.</p>
      <p>FoodClone has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that FoodClone shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
      <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

      <h2 className="mt-4">4. Termination</h2>
      <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

      <h2 className="mt-4">5. Disclaimer</h2>
      <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

      <h2 className="mt-4">6. Governing Law</h2>
      <p>These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.</p>

      <h2 className="mt-4">7. Changes To Terms</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

      <h2 className="mt-4">8. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>By email: terms@foodclone.com</li>
        <li>By visiting this page on our website: <Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default TermsOfService;
