type Props = {
  text: string;
  color: string;
};

export const ContactFormSubmitButton = ({ text, color }: Props) => (
  <button className={`waves-effect waves-light btn ${color}`} type="submit" name="submit">
    <i className="material-icons right">send</i> {text}
  </button>
);
