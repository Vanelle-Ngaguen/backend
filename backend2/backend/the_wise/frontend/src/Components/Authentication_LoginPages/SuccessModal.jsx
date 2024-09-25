import React, { useEffect } from 'react';
import './SuccessModal.css';

const SuccessModal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Message will disappear after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-modal">
      <div className="modal-content">
        <h2>Success</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
