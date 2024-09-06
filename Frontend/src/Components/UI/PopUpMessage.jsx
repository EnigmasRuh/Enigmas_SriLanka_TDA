import React, { useState } from 'react';

const PopUpMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Important Notice</h2>
        <p className="mb-4">{message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUpMessage;
