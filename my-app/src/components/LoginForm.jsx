import React, { useState } from 'react';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const gmailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      setEmailError('Please enter a valid Gmail address');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      setPasswordError('Password must contain both letters and numbers');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (isEmailValid && isPasswordValid) {
      alert('Form submitted successfully!');
    }
  };

  return React.createElement(
    'div',
    { className: 'container' },
    [
      React.createElement('div', { className: 'leftpart' }),
      React.createElement(
        'div',
        { className: 'Rightpart' },
        React.createElement(
          'div',
          { className: 'loginpage' },
          [
            React.createElement(
              'form',
              { onSubmit: handleSubmit },
              [
                React.createElement('h3', null, 'LOGIN'),
                React.createElement('input', {
                  type: 'text',
                  placeholder: 'Email id',
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  onBlur: () => validateEmail(email)
                }),
                emailError && React.createElement(
                  'div',
                  { className: 'error-message' },
                  emailError
                ),
                React.createElement('input', {
                  type: 'password',
                  placeholder: 'Password',
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                  onBlur: () => validatePassword(password)
                }),
                passwordError && React.createElement(
                  'div',
                  { className: 'error-message' },
                  passwordError
                ),
                React.createElement('input', {
                  type: 'submit',
                  value: 'Submit'
                })
              ]
            ),
            React.createElement('p', null, 'Forgot Password?')
          ]
        )
      )
    ]
  );
}

export default LoginForm;