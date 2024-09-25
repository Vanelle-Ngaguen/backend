// OtpAuthentication.jsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './OtpAuthentication.css'; // Create this CSS file for styling

const OtpAuthentication = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyOtp = () => {
    // Here you would typically send a request to your backend to verify the OTP
    // For demonstration, we'll just log the OTP and show a success/failure message
    if (otp === '123456') { // Replace this with actual OTP verification logic
      setMessage('OTP verified successfully!');
    } else {
      setMessage('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="otp-auth-container">
      <h2>OTP Verification</h2>
      <p>Enter the OTP sent to your phone or email</p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
        />
        <Link to="/reset_password">
        <button onClick={handleVerifyOtp}>Verify OTP</button>
        </Link>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default OtpAuthentication;
