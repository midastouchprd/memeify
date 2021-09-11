import React from 'react';
import './styles.css';

const Register = () => {
  return (
    <div>
      <h1 className="signUp-text">Largest Community of Meme Enthusiast</h1>
      <div className="signUp-form">
        <h3 className="signUp-h3">Sign Up</h3>
        <input className="signUp-firstName" placeholder="First Name" />
        <input className="signUp-lastName" placeholder="Last Name" />
        <input className="signUp-email" placeholder="Email Address" />
        <input className="signUp-password" placeholder="Create Password" />
        <button type="submit" className="signup-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
