import { FC, useState } from "react";
import PageLayout from "../../layouts/PageLayout";
import { ContactForm } from "../../components/ContactForm";

export const Contact: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return isSubmitted ? (
    <div className="container center-align">
      <img
        className="responsive-img"
        src={require("../../images/mail_sent.svg")}
        alt="mail_sent"
        width="30%"
      />
      <h4>Thank you for your message</h4>
    </div>
  ) : (
    <PageLayout title="Contact Us">
      <ContactForm setIsSubmitted={setIsSubmitted} />
    </PageLayout>
  );
};
