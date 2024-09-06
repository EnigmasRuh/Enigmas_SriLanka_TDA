const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const { EMAIL, PASSWORD } = require("../env.js");

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
      name: "Visa Application Service",
      link: "https://visaapplication.com/",
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
      return res.status(500).json({ error });
    });
};

module.exports = {
  sendMail,
};
