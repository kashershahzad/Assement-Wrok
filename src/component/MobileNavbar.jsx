'use client'
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="relative">
      <button
        className="absolute top-4 right-4 p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-lightBlue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      
      {isOpen && (
        <ul className="absolute top-12 right-4 bg-white shadow-lg p-4 rounded-md">
          <li className="py-2">App</li>
          <li className="py-2">Security</li>
          <li className="py-2">Contact</li>
        </ul>
      )}
    </div>
    </>
  );
};

export default MobileNavbar;
