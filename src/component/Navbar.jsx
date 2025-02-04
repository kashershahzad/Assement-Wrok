'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex items-center lg:gap-40 justify-between mt-5 px-20 gap-5'>
      {/* Logo */}
      <img src="/images/Logo.png" alt="Logo" width={200} height={52} />

      {/* Navigation Links for Desktop */}
      <ul className='hidden md:flex gap-5 text-[#00ABE1] font-bold text-sm'>
        <li>App</li>
        <li>Security</li>
        <li>Contact</li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className='md:hidden text-[#00ABE1] font-bold text-sm'
      >
        Menu
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center'>
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className='absolute top-5 right-5 text-[#00ABE1] font-bold text-sm'
          >
            Close
          </button>

          {/* Navigation Links for Mobile */}
          <ul className='flex flex-col gap-5 text-[#00ABE1] font-bold text-sm'>
            <li>App</li>
            <li>Security</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;