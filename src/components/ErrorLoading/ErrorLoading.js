import React from 'react';
import './ErrorLoading.css';

const ErrorLoading = () => {
  return (
    <div className="error-wrapper">
      <div className="error-icon-wrapper">
        <i className="fas fa-bomb error-icon" />
      </div>
      <div className="error-text-wrapper">
        <p className="wrong-text">Something went wrong... </p>
        <p>We are already working on fixing this problem</p>
      </div>
    </div>
  );
};

export default ErrorLoading;
