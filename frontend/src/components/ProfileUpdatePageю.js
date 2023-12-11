import React, { useState } from 'react';
import axios from 'axios';

const ProfileUpdatePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put('/api/users/profile', { username, email });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default ProfileUpdatePage;
