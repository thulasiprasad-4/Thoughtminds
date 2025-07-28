import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import MyPost from './components/MyPost';
import AllPost from './components/AllPost';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/mypost" element={<MyPost />} /> 
         <Route path="/allpost" element={<AllPost loggedInUserId={1} />} /> 
      </Routes>
    </Router>
  );
}

export default App;