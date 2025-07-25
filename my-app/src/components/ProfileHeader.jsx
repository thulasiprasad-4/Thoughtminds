import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getInitials from "../functions/getInitials";
import '../Post.css';

const ProfileHeader = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!user) return null;

  const initials = getInitials(user.name);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  const goToMyPost = () => {
    navigate('/mypost');
  };

  const goToAllPost = () => {
    navigate('/allpost');
  };

  return (
    <div className="profile-header">
      <div className="header-left">
        <div className="small-profile-photo">{initials}</div>
        <span className="header-username">{user.username}</span>
      </div>
      <div className="header-buttons">
        <button className="nav-button" onClick={goToMyPost}>My Post</button>
        <button className="nav-button" onClick={goToAllPost}>All Post</button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;



