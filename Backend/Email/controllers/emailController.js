const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config();

const { EMAIL, PASSWORD } = process.env;

const sendMail = (req, res) => {
  const { userEmail, visaStatus } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Dummy Product Name",
      link: "https://dummyproductlink.com/",
    },
  });

  let response = {
    body: {
      name: "Visa Application Service",
      intro: visaStatus
        ? "Your visa has been approved!"
        : "Your visa application was not approved.",
      table: {
        data: [
          {
            item: "Visa Application",
            description: visaStatus ? "Approved" : "Not Approved",
            date: new Date().toLocaleDateString(),
          },
        ],
      },
      outro: visaStatus
        ? "Congratulations on your visa approval!"
        : "Please contact us for further assistance.",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "Visa Application Status",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "You should receive an email regarding your visa status.",
      });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email. Please try again later." });
    });
};

module.exports = {
  sendMail,
};
