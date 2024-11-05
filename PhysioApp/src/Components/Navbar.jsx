import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar bg-stone-400'>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/workout">Workout</Link>
          </li>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;  