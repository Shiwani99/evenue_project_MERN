import React, { useState} from "react";
import {login} from '../api/user';
import {useNavigate} from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{

      const res = await login(email,password);
      if(res.error) alert(res.error);
      else{
        alert(res.message);

        navigate("/",{ replace: true });
      }

    } catch (err) {
      alert(err);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" disabled={!email || !password} onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default LoginForm;
