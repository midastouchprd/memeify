import React, { useState, useEffect } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import * as UserService from '../../api/UserService';
import { setToken } from '../../utils/tokenservice';

const Register = () => {
  const history = useHistory();
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
    //trying to extract a token
    if (res.data.data) {
      if (res.data.data.token) {
        const token = res.data.data.token;
        setToken(token);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        //redirect to home
        history.push('/');
      }
    } else {
      alert('Server Error');
    }
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
          value={firstName}
        />
        <input
          className="signUp-lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          className="signUp-email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="signUp-password"
          placeholder="Create Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="signup-button" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
