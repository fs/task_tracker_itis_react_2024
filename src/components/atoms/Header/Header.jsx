import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <p>itis react MK</p> {/* Text beside the links */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/info">Info</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
