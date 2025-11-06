
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/forms.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Invalid email format.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the email and password to your backend for authentication
      console.log('Login submitted:', { email, password });
      alert('Login successful! (This is a demo, no actual login occurred)');
      // Reset form or redirect
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-card">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit" className="common-btn">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register" className="auth-link">Register here</Link></p>
        <Link to="/" className="link-btn mt-3"><i class="fas fa-home"></i> Home</Link>
      </div>
    </div>
  );
};

export default Login;
