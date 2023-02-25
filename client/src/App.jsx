
import React from 'react'; 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Register from "./components/signup";
import Login from "./components/login";

const Home = () =>{
  const navigate = useNavigate()
  return (
    <div>
      <button on onClick={() => navigate('/signup')}>Register</button>
      <button on onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


