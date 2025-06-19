import React from 'react';
import './TriangleButton.css';

const TriangleButton = ({ direction = 'up', onClick, size = 'medium' }) => {
  // Size classes
  const sizeClasses = {
    small: 'triangle-small',
    medium: 'triangle-medium',
    large: 'triangle-large'
  };

  return (
    <button 
      className={`triangle-button ${direction} ${sizeClasses[size]}`} 
      onClick={onClick}
      aria-label={`${direction} button`}
    />
  );
};

export default TriangleButton;