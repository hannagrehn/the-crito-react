import React, { useState } from 'react';

const LeaveUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError('');
    setEmailError('');

    let isValid = true;

    if (name === '') {
      setNameError('Name is required');
      isValid = false;
    }

    if (email === '' || !isValidEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    if (isValid) {
      const data = {
        name: name,
        email: email,
        message: message,
      };

      fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            alert('Message sent!');
          } else {
            alert('Message failed to send. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <section className="leave-us">
      <div className="container">
        <div className="section-title">
          <h2>Leave us a message<br />for any information.</h2>
        </div>
        <div className="content">
          <form id="leave-us-form" onSubmit={handleSubmit}>
            <div className="form">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name*"
              />
              <span className="error">{nameError}</span>
            </div>
            <div className="form">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
              />
              <span className="error">{emailError}</span>
            </div>
            <div className="message-form">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message*"
              />
            </div>
            <button className="btn-yellow" type="submit">
              Send Message
              <i className="fa-regular fa-arrow-up-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeaveUs;

