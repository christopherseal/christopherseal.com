// src/sections/Home.js
import React, { useState, useEffect, useRef } from 'react';
import profilePic from '../images/main_image.jpg';
import './Home.css';
import {
  FaLaptop,
  FaArrowLeft,
  FaArrowRight,
  FaShopify
} from 'react-icons/fa';

const experiences = [
  {
    company: "Shopify",
    role: "Software Developer",
    icon: <FaShopify />,
    description:
      "Created developer tools and tutorials. Improved onboarding flow and documentation.",
  },
  {
    company: "Rewind Software",
    role: "Software Developer",
    icon: <FaLaptop />,
    description:
      "Worked on iOS performance tuning and contributed to system frameworks.",
  },
  {
    company: "Reactify",
    role: "Senior Fraud, Risk and Payments Analyst",
    icon: <FaShopify />,
    description:
      "Built design systems using modern React patterns. Led component library development.",
  },
];

export function Home({ title }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const exp = experiences[index];

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % experiences.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + experiences.length) % experiences.length);
  const next = () => setIndex((i) => (i + 1) % experiences.length);

  return (
    <div className="homepage-wrapper">
      <div className="homepage">
        <div className="blurb-section">
          <div className="blurb-tile">
            <div className="blurb-pic-wrapper">
              <img className="profile-pic" src={profilePic} alt="Christopher Seal" />
            </div>
            <h1>{title}</h1>
            <p>
              I’m a full-stack <strong>(backend leaning)</strong> developer focused on clean architecture, seamless UX, and building
              software that solves real-world problems. Always learning, always iterating.
            </p>
            <div className="tech-stack-wrapper">
              <h4 className="tech-title">Technologies I Use:</h4>
              <div className="tech-stack">
                <div className="tech-item">
                  <i className="devicon-ruby-plain colored"></i>
                  <span>Ruby on Rails</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-react-original colored"></i>
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-graphql-plain colored"></i>
                  <span>GraphQL</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-amazonwebservices-original colored"></i>
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="experience-section"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="experience-tile">
            <div className="tile-content">
              <div className="icon">{exp.icon}</div>
              <h2>{exp.company}</h2>
              <h3>{exp.role}</h3>
              <p>{exp.description}</p>
            </div>
          </div>

          <div className="experience-pagination-wrapper">
            <div className="experience-pagination">
              <button onClick={prev} className="arrow-button" aria-label="Previous">
                <FaArrowLeft />
              </button>
              {experiences.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                  title={`Go to experience ${i + 1}`}
                />
              ))}
              <button onClick={next} className="arrow-button" aria-label="Next">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
