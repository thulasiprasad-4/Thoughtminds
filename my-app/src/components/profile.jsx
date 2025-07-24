
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import getInitials from '../functions/getInitials';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (!storedUser) {
      navigate('/');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return null;

  const initials = getInitials(user.name);

  return (
    <div className="profile-page">
      <ProfileHeader />

      <div className="profile-container">
        <div className="profile-left">
          <div className="initial-circle">{initials}</div>
          <h2>{user.name}</h2>
          <p>Your profile initials</p>
        </div>

        <div className="profile-right">
          <h3>Profile Details</h3>
          <div className="form-grid">
             <div><label>Username</label><input value={user.username} readOnly /></div>
            <div><label>First name</label><input value={user.name.split(' ')[0]} readOnly /></div>
            <div><label>Second name</label><input value={user.name.split(' ')[1] || ''} readOnly /></div>
            <div><label>Email ID</label><input value={user.email} readOnly /></div>
            <div><label>City</label><input value={user.address.city} readOnly /></div>
            <div><label>Phone number</label><input value={user.phone} readOnly /></div>
            <div><label>Zipcode</label><input value={user.address.zipcode} readOnly /></div>
            <div><label>Street</label><input value={user.address.street} readOnly /></div>
            <div><label>Suite</label><input value={user.address.suite} readOnly /></div>
            <div><label>Website</label><input value={user.website} readOnly /></div>
            <div><label>Company Name</label><input value={user.company.name} readOnly /></div>
            <div><label>CatchPhrase</label><input value={user.company.catchPhrase} readOnly /></div>
            <div><label>Company bs</label><input value={user.company.bs} readOnly /></div>
            <div><label>Geo lat</label><input value={user.address.geo.lat} readOnly /></div>
            <div><label>Geo lng</label><input value={user.address.geo.lng} readOnly /></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;




