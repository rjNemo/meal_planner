import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";

export const ContactPage = props => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return isSubmitted ? (
    <div className="container center-align">
      <img
        className="responsive-img"
        src={require("../images/mail_sent.svg")}
        alt="mail_sent"
        width="30%"
      />
      <h4>Thank you for your message</h4>
    </div>
  ) : (
    <div className="container">
      <h1 className="logo">Contact Us</h1>
      <ContactForm handleSubmit={setIsSubmitted} />
    </div>
  );
};
