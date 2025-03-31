import { FeedModels } from "../Models/FeedModels.js";
import { UsersModels } from "../Models/UsersModels.js";
import { errorResponse } from "../utils/errorResponse.js";
import { encryptMessage } from "../utils/encryptMessage.js";
import { decryptMessage } from "../utils/decryptMessage.js";

class FeedController {
  async create(request, response) {
    try {
      const { nome, email, message } = request.body;

      const emailNotExists = await UsersModels.findOne({ email });

      if (!emailNotExists) {
        return errorResponse(response, 404, "E-mail inserido não registrado!");
      }

      const emailAlreadyExists = await FeedModels.findOne({ email });

      if (emailAlreadyExists) {
        return errorResponse(
          response,
          400,
          "Este e-mail já efetuou uma critica"
        );
      }

      const encryptedMessage = encryptMessage(message);

      await FeedModels.create({ nome, email, message: encryptedMessage });

      return response
        .status(200)
        .json({ message: "Feedback enviado com sucesso!" });
    } catch (err) {
      console.error("Erro ao criar feedback", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }

  async list(request, response) {
    try {
      const feedbacks = await FeedModels.find();

      const decryptedMessages = feedbacks.map((feedback) => ({
        nome: feedback.nome,
        email: feedback.email,
        message: decryptMessage(feedback.message),
      }));

      return response.status(200).json(decryptedMessages);
    } catch (err) {
      console.error("Erro ao listar feedbacks", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }
}

export default new FeedController();
