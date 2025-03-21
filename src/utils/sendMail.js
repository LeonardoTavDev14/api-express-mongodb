import { errorResponse } from "./errorResponse.js";
import { transporter } from "./transporterMail.js";
import "dotenv/config.js";

const sendMail = async (email, resetToken) => {
  const linkReset = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    from: `${process.env.EMAIL_HOST}`,
    to: email,
    subject: "Redefinição de senha",
    text: `Clique no link para redefinir sua senha: ${linkReset}`,
  };

  try {
    const infos = await transporter.sendMail(mailOptions);
    console.log(`Informações e-mail`, infos.response);
  } catch (err) {
    console.error("Erro ao enviar e-mail", err.message);
    errorResponse(response, 400, "Erro ao enviar redefinição de senha");
  }
};

export { sendMail };
