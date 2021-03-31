import React, { FC } from "react";

type Props = {
  id: string;
  type?: string;
  value: string;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
};

export const ContactFormInput: FC<Props> = ({
  id,
  type = "text",
  value,
  dispatch,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
