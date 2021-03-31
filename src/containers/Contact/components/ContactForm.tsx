import React, { FC, useState } from "react";
import { ContactFormInput } from "./ContactFormInput";
import { ContactFormSubmitButton } from "./ContactFormSubmitButton";
import { ContactFormTextArea } from "./ContactFormTextArea";

type Props = {
  setIsSubmitted: (value: boolean) => void;
};

export const ContactForm: FC<Props> = ({ setIsSubmitted }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <ContactFormSubmitButton
              text="Send Message"
              color="orange darken-2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
