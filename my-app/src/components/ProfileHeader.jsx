
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = ({ username, initials }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/', { replace: true });
  };

  return (
    <div className="profile-header">
      <div className="header-left">
        <div className="small-profile-photo">{initials}</div>
        <span className="header-username">{username}</span>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileHeader;
