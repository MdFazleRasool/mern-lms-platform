const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,              // IMPORTANT: Brevo uses port 587
      secure: false,          // false for TLS
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Learning Management System" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent: ", info.response);
    return info;
  } catch (error) {
    console.log("Mail Sender Error:", error.message);
    return null;
  }
};

module.exports = mailSender;
