// src/components/Footer.js
import React from 'react';
import { SocialIcons } from './SocialIcons';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <SocialIcons />
      <p>&copy; {new Date().getFullYear()} Christopher Seal</p>
    </footer>
  );
}
