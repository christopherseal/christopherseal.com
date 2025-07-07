// src/components/SocialIcons.js
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './SocialIcons.css';

export function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://github.com/christopherseal" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/christopher-seal-7b577613/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://twitter.com/cseal" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
  );
}
