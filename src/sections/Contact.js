import React, { useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export function Contact() {
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
    setTimeout(() => {
      history.push('/');
    }, 3000); // Redirect after 3 seconds
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-tile">
        {submitted ? (
          <div className="thank-you">
            <h2>Thank you!</h2>
            <p>Your message has been sent.</p>
          </div>
        ) : (
          <>
            <h2>Contact Me</h2>
            <form
              className="contact-form"
              action="https://formspree.io/f/movwzgbz"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="input-icon">
                <FaUser />
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="input-icon">
                <FaEnvelope />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="input-icon">
                <FaCommentDots />
                <textarea name="message" rows="5" placeholder="Your Message" required />
              </div>
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
