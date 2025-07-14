
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const users = [
  { email: "Sincere@april.biz", username: "Bret" },
  { email: "Shanna@melissa.tv", username: "Antonette" },
  { email: "Nathan@yesenia.net", username: "Samantha" },
  { email: "Julianne.OConner@kory.org", username: "Karianne" },
  { email: "Lucio_Hettinger@annie.ca", username: "Kamren" },
  { email: "Karley_Dach@jasper.info", username: "Leopoldo_Corkery" },
  { email: "Telly.Hoeger@billy.biz", username: "Elwyn.Skiles" },
  { email: "Sherwood@rosamond.me", username: "Maxime_Nienow" },
  { email: "Chaim_McDermott@dana.io", username: "Delphine" },
  { email: "Rey.Padberg@karina.biz", username: "Moriah.Stanton" }
];

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const user = users.find(u => u.email === email);

    if (!user) {
      setLoginError("❌ Email is not allowed to login.");
      return;
    }

    const expectedPassword = `${user.username}@123`;
    if (password !== expectedPassword) {
      setLoginError("❌ Incorrect password.");
      return;
    }

  
    setLoginError('');
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
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {loginError && <div className="error-message">{loginError}</div>}

            <input type="submit" value="Submit" />
          </form>

          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

