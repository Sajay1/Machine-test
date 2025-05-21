// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Menu Manager</h1>
      <p className="text-lg text-gray-300 mb-8">
        Create and manage menus like Drinks, Snacks, and more.
      </p>
      <button
        onClick={() => navigate('/menu')}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white font-semibold"
      >
        Go to Menu Page
      </button>
    </div>
  );
};

export default Home;
