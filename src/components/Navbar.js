import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaEnvelope, FaHome } from 'react-icons/fa';
import './Navbar.css';
import { ThemeContext } from '../App';

export function Navbar({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
        <li className="theme-toggle">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            <span className="theme-icon">
              {theme === 'dark' ? <FaSun style={{ color: '#fcd34d' }} /> : <FaMoon style={{ color: '#7f5af0' }} />}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
