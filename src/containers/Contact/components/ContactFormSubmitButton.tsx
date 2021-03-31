import { FC } from "react";

type Props = {
  text: string;
  color: string;
};

export const ContactFormSubmitButton: FC<Props> = ({ text, color }) => (
  <button
    className={`waves-effect waves-light btn ${color}`}
    type="submit"
    name="submit"
  >
    <i className="material-icons right">send</i> {text}
  </button>
);
