import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: `${process.env.HOST_MAILTRAP}`,
  port: `${process.env.PORT_MAILTRAP}`,
  auth: {
    user: `${process.env.USER_MAILTRAP}`,
    pass: `${process.env.PASSWORD_MAILTRAP}`,
  },
});

export { transporter };
