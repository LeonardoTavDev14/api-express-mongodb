import { errorResponse } from "./errorResponse.js";
import { transporter } from "./transporterMail.js";
import "dotenv/config.js";

const sendMail = async (email, resetToken) => {
  const linkReset = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    from: `${process.env.EMAIL_HOST}`,
    to: email,
    subject: "Redefinição de senha",
    text: `Clique no link abaixo para redefinir sua senha`,
    html: `    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
    <h2 style="color: #333;">Redefinição de Senha</h2>
    <p style="font-size: 16px; color: #555;">Olá,</p>
    <p style="font-size: 16px; color: #555;">
      Recebemos uma solicitação para redefinir sua senha. Se você não fez essa solicitação, ignore este e-mail.
    </p>
    <p style="text-align: center;">
      <a href="${linkReset}" 
        style="display: inline-block; padding: 12px 20px; font-size: 16px; color: #fff; background-color: #007bff; 
        text-decoration: none; border-radius: 5px; font-weight: bold;">
        Redefinir Senha
      </a>
    </p>
    <p style="font-size: 14px; color: #777; margin-top: 20px;">
      Este link é válido por 15 minutos. Caso tenha problemas, solicite novamente a mudança de senha.
    </p>
    <p style="font-size: 14px; color: #777;">Atenciosamente, <br> Equipe Suporte</p>
  </div>`,
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
