import { useState } from "react";
import PageLayout from "../../layouts/PageLayout";
import { ContactForm } from "./components/ContactForm";
import { ContactFormSubmitted } from "./components/ContactFormSubmitted";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return isSubmitted ? (
    <ContactFormSubmitted />
  ) : (
    <PageLayout title="Contact Us">
      <ContactForm setIsSubmitted={setIsSubmitted} />
    </PageLayout>
  );
};
