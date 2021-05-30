import './SubmitButton.css';

import React from 'react';

export const SubmitButton = ({ setIsLoading, handleSearch }) => {
  return (
    <button
      onClick={() => {
        setIsLoading(true);
        handleSearch();
      }}
    >
      Show Me
    </button>
  );
};
