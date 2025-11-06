
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">Contact Us</h1>

      <p className="lead text-center mb-5">
        We'd love to hear from you! Whether you have a question, feedback, or a recipe suggestion, feel free to reach out.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Recipe Suggestion" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="common-btn w-100"><i class="fas fa-paper-plane"></i> Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5 text-center">
        <div className="col-md-4">
          <h5>Email Us</h5>
          <p><a href="mailto:info@foodclone.com">info@foodclone.com</a></p>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <div className="footer-social">
            <a href="#" className="mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mx-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
