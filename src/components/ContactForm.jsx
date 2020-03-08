import React, { useState } from "react";
// import { notificationMail, confirmationMail } from "../utils/mail";

export const ContactForm = ({ setIsSubmitted }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const changeFirstName = ev => {
    const { value } = ev.target;
    setFirstName(value);
  };
  const changeLastName = ev => {
    const { value } = ev.target;
    setLastName(value);
  };
  const changePhone = ev => {
    const { value } = ev.target;
    setPhone(value);
  };
  const changeEmail = ev => {
    const { value } = ev.target;
    setEmail(value);
  };
  const changeMessage = ev => {
    const { value } = ev.target;
    setMessage(value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
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
              onChange={changeFirstName}
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput
              id="Last Name"
              value={lastName}
              onChange={changeLastName}
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput
              id="Email"
              type="email"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput
              id="Phone"
              value={phone}
              type="tel"
              // pattern="[0-9]"
              onChange={changePhone}
            />
          </div>
          <div className="col s12">
            <ContactFormTextArea
              id="Message"
              value={message}
              onChange={changeMessage}
            />
            <ContactFormSubmit text="Send Message" color="orange darken-2" />
          </div>
        </div>
      </div>
    </form>
  );
};

const ContactFormInput = ({ id, type = "text", value, onChange }) => {
  return (
    <div className="input-field">
      {/* <i className="material-icons prefix">account_circle</i> */}
      <input
        className="validate"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );
};

const ContactFormTextArea = ({ id, value, onChange }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{id}</label>
      <textarea
        className="materialize-textarea validate"
        rows="12"
        name={id}
        value={value}
        onChange={onChange}
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
