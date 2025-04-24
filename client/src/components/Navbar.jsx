import React, { useState } from 'react';
import image from '../image/image.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0 w-32">
          <img src={image} alt="Logo" className="relative w-86px h-76px top-60px left-168px" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 justify-content-center"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li className="hover:text-blue">
              <a href="menu">Home</a>
            </li>
            <li className="hover:text-blue">
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
