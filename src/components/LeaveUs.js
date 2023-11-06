
import React, { useState } from 'react';

const LeaveUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [apiMessage, setApiMessage] = useState('');

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);

        
        if (newName.trim().length >= 2) {
            setNameError('');
        } else {
            setNameError('Name must be at least 2 characters long');
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(newEmail)) {
            setEmailError('');
        } else {
            setEmailError('Enter a valid email address');
        }
    };

    const handleSubmit = async () => {
        
        if (name.trim().length >= 2 && emailError === '') {

            try {
                const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                });

                if (response.status === 200) {
                    setApiMessage('Message sent!');
                } else {
                    setApiMessage('Message not sent, API error :(');
                }
            } catch (error) {
                
                setApiMessage('Message not sent, Network error :(');
            }

            setName('');
            setEmail('');
            setMessage('');
            
        } else {
            
            setApiMessage('Form not submitted, please enter correct information');
        }
    };

    return (
        <section className="leave-us">
            <div className="container">
                <div className="section-title">
                    <h2>Leave us a message<br />for any information.</h2>
                </div>
                <div className="content">
                    {apiMessage && <p className="api-message">{apiMessage}</p>}
                    <div className="form">
                        <input
                            type="text"
                            placeholder="Name*"
                            value={name}
                            onChange={handleNameChange}
                        />
                        {nameError && <p className="error-message">{nameError}</p>}
                    </div>
                    <div className="form">
                        <input
                            type="text"
                            placeholder="Email*"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                    </div>
                    <div className="message-form">
                        <input
                            type="text"
                            placeholder="Your Message*"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button className="btn-yellow" onClick={handleSubmit}>
                        Send Message<i className="fa-regular fa-arrow-up-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LeaveUs;
