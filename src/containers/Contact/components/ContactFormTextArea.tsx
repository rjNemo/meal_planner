import React, { FC } from "react";

type Props = {
  id: string;
  value: string;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
};

export const ContactFormTextArea: FC<Props> = ({ id, value, dispatch }) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
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
