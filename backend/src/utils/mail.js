import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Milestone - task manager",
      link: "https://milestonelink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.milestone@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "The connection to the email service was terminated due to an authentication error. Please confirm the validity of the configured credentials.",
      console.error("error", error),
    );
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! We're excited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button:",
        button: {
          color: "#05ac4e",
          text: "Verify your Email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have queries? Just reply to this email, we'd love to help.",
    },
  };
};

const resetPasswordMailgenContent = (username, PasswordRestUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request the password of your account",
      action: {
        instructions: "To reset your password click on the following button:",
        button: {
          color: "#a42300",
          text: "Reset password",
          link: PasswordRestUrl,
        },
      },
      outro: "If not done by you, Then ignore the email",
    },
  };
};

export {
  emailVerificationMailgenContent,
  resetPasswordMailgenContent,
  sendEmail,
};
