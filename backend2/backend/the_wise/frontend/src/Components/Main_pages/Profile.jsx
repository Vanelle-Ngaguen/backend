import React, { useContext } from 'react';
import { useAuth } from '../Main_pages/AuthContext'; // Adjust the import path accordingly
import './Profile.css'; // Add CSS styles as needed

const Profile = () => {
  const { user, isAuthenticated } = useAuth(); // Assuming user and isAuthenticated are provided by AuthContext

  if (!isAuthenticated) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-header">
       
        <div className="profile-info">
          <div className="profile-item">
            <span className="profile-label">Name:</span>
            <span className="profile-value">{user?.name || 'Your Name'}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Email:</span>
            <span className="profile-value">{user?.email || 'N/A'}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Username:</span>
            <span className="profile-value">{user?.username || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
