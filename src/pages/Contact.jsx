import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";

export const ContactPage = () => {
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
      <h2 className="logo">Contact Us</h2>
      <ContactForm onSubmit={setIsSubmitted} />
    </div>
  );
};
