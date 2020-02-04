import React from "react";
import { useInput } from "../utils/inputHook";

export const ContactForm = ({ onSubmit }) => {
  // const fields = ["firstname", "lastname", "email", "phone", "message"];

  // const [firstName, setFirstName] = useState("");

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(true);
  };

  // const handleChange = ev => {
  //   const { value } = ev.target;
  //   setFirstName(value);
  // };

  // const { value, bind } = useInput("");
  const { bind } = useInput("");
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col s12">
          <div className="col s12 m6">
            <ContactFormInput
              id="First Name"
              // value={firstName}
              // onChange={handleChange}
              {...bind}
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput id="Last Name" {...bind} />
          </div>
          <div className="col s12 m6">
            <ContactFormInput id="Email" type="email" />
          </div>
          <div className="col s12 m6">
            <ContactFormInput id="Phone" />
          </div>
          <div className="col s12">
            <ContactFormTextArea id="Message" />
            <ContactFormSubmit text="Send Message" />
          </div>
        </div>
      </div>
    </form>
  );
};

const ContactFormInput = ({ id, type = "text", value, onChange }) => {
  return (
    <div className="input-field">
      {/* <i class="material-icons prefix">account_circle</i> */}
      <label htmlFor={id}>{id}</label>
      <input
        className="validate"
        type={type}
        id={id}
        name={value}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const ContactFormTextArea = ({ id }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{id}</label>
      <textarea
        className="materialize-textarea validate"
        rows="12"
        //   cols="50"
        name={id}
        // value={value}
        //   onChange={onChange}
      />
    </div>
  );
};

const ContactFormSubmit = ({ text }) => {
  return (
    <button
      className="waves-effect waves-light btn"
      type="submit"
      name="submit"
    >
      <i className="material-icons right">send</i> {text}
    </button>
  );
};
// {fields.map(field => (
//     <ContactFormInput
//       value={field}
//       placeholder={field}
//       //   onChange={handleChange}
//     />
//   ))}
