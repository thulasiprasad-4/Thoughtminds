import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 10))) // 
      .catch((err) => {
        console.error('Error fetching user data:', err);
        setErrorMessage("Unable to load users.");
      });
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const matchedUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (!matchedUser) {
      setErrorMessage("Can't login");
      return;
    }

    
    const expectedPassword = `${matchedUser.username}@123`;


    if (password !== expectedPassword) {
      setErrorMessage("Can't login");
      return;
    }


    setErrorMessage('');
    navigate('/profile');
  };

  return (
    <div className="container">
      <div className="leftpart"></div>
      <div className="Rightpart">
        <div className="loginpage">
          <form onSubmit={handleSubmit}>
            <h3>LOGIN</h3>

            <input
              type="text"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {errorMessage && (
              <div className="error-message" style={{ color: 'red' }}>
                {errorMessage}
              </div>
            )}

            <input type="submit" value="Submit" />
          </form>

          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

