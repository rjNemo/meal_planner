import React from "react";

export const ContactForm = ({ handleSubmit }) => {
  // const fields = ["firstname", "lastname", "email", "phone", "message"];

  //   const [firstName, setFirstName] = useState("");

  const onSubmit = ev => {
    ev.preventDefault();
    handleSubmit(true);
  };

  //   const handleChange = ev => {
  //     const { value } = ev.target;
  //     setFirstName(value);
  //   };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col s12">
          <div className="col s12 m6">
            <ContactFormInput id="First Name" />
          </div>
          <div className="col s12 m6">
            <ContactFormInput id="Last Name" />
          </div>
          <div className="col s12 m6">
            <ContactFormInput
              id="Email"
              type="email"
              placeholder="jd@mail.com"
            />
          </div>
          <div className="col s12 m6">
            <ContactFormInput id="Phone" placeholder="0123456789" />
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

const ContactFormInput = ({ id, type = "text" }) => {
  return (
    <div className="input-field">
      {/* <i class="material-icons prefix">account_circle</i> */}
      <label for={id}>{id}</label>
      <input
        className="validate"
        type={type}
        id={id}
        name={id}
        // value={value}
        //   onChange={onChange}
      />
    </div>
  );
};

const ContactFormTextArea = ({ id }) => {
  return (
    <div className="input-field">
      <label for={id}>{id}</label>
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
      <i class="material-icons right">send</i> {text}
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
