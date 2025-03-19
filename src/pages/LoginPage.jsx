import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful');
    navigate('/list');
  };

  return (
    <div className="container">
    
      <div className="card p-4" style={{ width: '250px' }}>
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="inputLabel m-4"  >Email</label>
            <input
              type="email"
              className="inputField"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="inputLabel" style={{margin:"10px"}}>Password</label>
            <input
              type="password"
              className="inputField"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button"
           style={{margin:"10px"}} 
           >Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
