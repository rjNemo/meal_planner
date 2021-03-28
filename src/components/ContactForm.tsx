import React, { useState } from "react";
// import { notificationMail, confirmationMail } from "../utils/mail";

export const ContactForm = ({ setIsSubmitted }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // confirmationMail(email);
    // const body = `Sender: ${firstName} ${lastName}\nPhone: ${phone}\nMessage: ${message}`;
    // notificationMail(email, `New message from ${firstName} ${lastName}`, body);
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col s12">
          <div className="col s12 m6">
            <ContactFormInput
              id="First Name"
              value={firstName}
              dispatch={setFirstName}
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput
              id="Last Name"
              value={lastName}
              dispatch={setLastName}
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput
              id="Email"
              type="email"
              value={email}
              dispatch={setEmail}
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput
              id="Phone"
              value={phone}
              type="tel"
              dispatch={setPhone}
            />
          </div>
          <div className="col s12">
            <ContactFormTextArea
              id="Message"
              value={message}
              dispatch={setMessage}
            />
            <ContactFormSubmit text="Send Message" color="orange darken-2" />
          </div>
        </div>
      </div>
    </form>
  );
};

const ContactFormInput = ({ id, type = "text", value, dispatch }) => {
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(e.target.value);
  };

  return (
    <div className="input-field">
      {/* <i className="material-icons prefix">account_circle</i> */}
      <input
        className="validate"
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );
};

const ContactFormTextArea = ({ id, value, dispatch }) => {
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(e.target.value);
  };

  return (
    <div className="input-field">
      <label htmlFor={id}>{id}</label>
      <textarea
        className="materialize-textarea validate"
        rows={12}
        name={id}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

const ContactFormSubmit = ({ text, color }) => {
  return (
    <button
      className={`waves-effect waves-light btn ${color}`}
      type="submit"
      name="submit"
    >
      <i className="material-icons right">send</i> {text}
    </button>
  );
};
