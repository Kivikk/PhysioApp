import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
      <div className="navbar bg-stone-400 p-4">
        <div className="flex-1">
          <Link to="/" className="text-green-800">PhysioApp</Link>
        </div>
        <div className="flex space-x-4 mr-5">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/workout" className="text-white">Workout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;