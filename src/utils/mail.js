// This must be set on the server using express
import { createTransport } from "nodemailer";
import { mailPassword } from "./secret";

const myMail = "ruidy.nemausat@gmail.com";
const myPass = mailPassword;

const handleMail = (mailTo, subject, text) => {
  let transporter = createTransport({
    service: "gmail",
    auth: {
      user: myMail,
      pass: myPass
    }
  });

  let mailOptions = {
    from: myMail,
    to: mailTo,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const confirmationMail = (
  mailTo,
  subject = "Your message has been sent",
  text = "Thanks for your message. We'll reply you soon."
) => {
  handleMail(mailTo, subject, text);
};

export const notificationMail = (mailTo = myMail, subject, text) => {
  handleMail(mailTo, subject, text);
};
