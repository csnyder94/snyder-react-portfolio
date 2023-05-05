import React, { useState } from 'react'; //Use state from react

const Contact = () => { //Function for submitting a contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    const handleSubmit = (event) => { //Specific to handling submit
        event.preventDefault();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);

        if (name === '') {
            setNameError(true);
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Validating email
        if (!emailPattern.test(email)) {
            setEmailError(true);
            return;
        }

        if (message === '') {
            setMessageError(true);
            return;
        }

        setFormSubmit(true);
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {nameError && (
                                    <div className="invalid-feedback">Please enter your name</div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address *</label>
                                <input
                                    type="email"
                                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && (
                                    <div className="invalid-feedback">Please enter a valid email address</div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    className={`form-control ${messageError ? 'is-invalid' : ''}`}
                                    id="message"
                                    rows="5"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                {messageError && (
                                    <div className="invalid-feedback">Please enter a message:</div>
                                )}
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                        {formSubmit && (
                            <div className="alert alert-success mt-3" role="alert">
                                Thank you for reaching out to me!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;