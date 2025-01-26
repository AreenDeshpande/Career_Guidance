import React from 'react';
import './login.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome!</h2>
        <p className="login-subtitle">Log in to your account</p>
        <form className="login-form">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
