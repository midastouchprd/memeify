import React, { useState, useEffect } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import * as UserService from '../../api/UserService';
import { setToken } from '../../utils/tokenservice';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const newMemifyUser = {
      firstName,
      lastName,
      email,
      password,
    };

    const res = await UserService.create(newMemifyUser);
    console.log(res);
  };

  return (
    <div>
      <h1 className="signUp-text">Largest Community of Meme Enthusiast</h1>
      <div className="signUp-form">
        <h3 className="signUp-h3">Sign Up</h3>
        <input
          className="signUp-firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="signUp-lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="signUp-email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signUp-password"
          placeholder="Create Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup-button" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
