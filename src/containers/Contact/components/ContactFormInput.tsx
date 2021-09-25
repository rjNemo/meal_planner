import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

type Props = {
  id: string;
  type?: string;
  value: string;
  dispatch: Dispatch<SetStateAction<string>>;
};

export const ContactFormInput = ({ id, type = "text", value, dispatch }: Props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
