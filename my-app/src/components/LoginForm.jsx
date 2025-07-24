
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Failed to fetch users:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      alert("Can't login: Email not found.");
      return;
    }

    const expectedPassword = `${user.username}@123`;

    if (password !== expectedPassword) {
      alert("Can't login: Incorrect password.");
      return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setEmail('');
    setPassword('');
    navigate('/profile');
  };

  return (
    <div className="container">
      <div className="loginpage">
        <div className="form-container">
          <form id="myForm" onSubmit={handleSubmit}>
            <h5>Login</h5>

            <div className="form-group full-width input">
              <label>Email ID: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="form-group full-width input">
              <label>Password<span style={{ color: 'red' }}>*</span></label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>

            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;



