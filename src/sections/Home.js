// src/sections/Home.js
import React, { useState, useEffect, useRef } from 'react';
import profilePic from '../images/main_image.jpg';
import { SocialIcons } from '../components/SocialIcons';
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
    date: "2017 - 2023",
    description: [
      "Developed and enhanced machine learning features in Shopify's Fraud Engineering team using Ruby on Rails to improve detection of fraudulent orders.",
      "Maintained and expanded functionality in Shopify's internal fraud/risk case management tool, actively used by support analysts.",
      "Implemented a unified authentication system for Shopify's Help Center, improving login consistency across multiple user-facing surfaces.",
      "Integrated Elasticsearch into the Help Center to power smarter documentation search with better indexing, predictive typing, and analytical insights.",
      "Launched an internal segmentation engine with a React frontend and Ruby on Rails + GraphQL backend to intelligently route support interactions, improving response accuracy based on merchant context."
    ]
  },
  {
    company: "Rewind Software",
    role: "Software Developer",
    icon: <FaLaptop />,
    date: "2024 - 2025",
    description: [
      "Investigated highly complex technical issues, engaging directly with customers and serving as a crucial escalation point across multiple systems (Ruby on Rails + React).",
      "Created an app in Ruby parsing Zendesk (email) data, saving it to AWS S3 and using AWS Lambdas to pass information to ChatGPT to track trends, metrics and sentiment with AI for support leadership.",
      "Played a key role in root cause analysis, aiming for long-term preventative solutions by examining support data and implementing improvements and fixes to the platform."
    ]
  },
  {
    company: "Shopify",
    role: "Senior Fraud, Risk and Payments Analyst",
    icon: <FaShopify />,
    date: "2013 - 2017",
    description: [
      "Reviewed daily reports to identify potentially fraudulent or high-risk payments, accounts, and transactions, distinguishing legitimate activity from malicious behavior.",
      "Used SQL and internal scripts to investigate flagged accounts and orders, leveraging tools like proxy detection and device-linking platforms.",
      "Collaborated with customers and support teams to provide education around fraud prevention, while mitigating chargebacks and addressing ongoing fraud-related concerns."
    ]
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
              I'm a full-stack <strong>(backend leaning)</strong> developer focused on clean architecture, seamless UX, and building
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
            <div className="blurb-footer">
              <SocialIcons />
              <p className="copyright">© {new Date().getFullYear()} Christopher Seal</p>
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
              <p className="experience-date">{exp.date}</p>

              <ul className="experience-description">
                {exp.description.map((line, i) => (
                  <li key={`${index}-${i}`} style={{ '--i': i }}>{line}</li>
                ))}
              </ul>
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
