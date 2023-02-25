import React, { useState } from 'react';

// import api functions from backend
import {register} from "../api/user";
//import Login from "./login";
import {useNavigate} from 'react-router-dom';


function RegistrationPage() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await register(email,phone,username,firstname,lastname,password);
      if(res.error) alert(res.error);
      else{
        alert(res.message);

        navigate("/login",{ replace: true });
      }

    } catch (err) {
      alert(err)
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <br />
      <label>
        User Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationPage;







