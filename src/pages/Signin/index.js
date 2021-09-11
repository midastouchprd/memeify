import React from 'react';
import './style.css';

const Signin = () => {
  return (
    <div>
      <h1 className="signIn-h1">Sign In to A Meme Filled World</h1>
      <div className="signIn-form">
        <h3 className="signIn-h3">Sign In</h3>
        <input className="signIn-email" placeholder="Email Address" />
        <input className="signIn-password" placeholder="Create Password" />
        <button type="submit" className="signIn-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signin;
