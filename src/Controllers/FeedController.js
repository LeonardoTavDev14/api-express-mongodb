import { FeedModels } from "../Models/FeedModels.js";
import { UsersModels } from "../Models/UsersModels.js";
import { errorResponse } from "../utils/errorResponse.js";

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

      await FeedModels.create({ nome, email, message });

      return response
        .status(200)
        .json({ message: "Feedback enviado com sucesso!" });
    } catch (err) {
      console.error("Erro ao criar feedback", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }
}

export default new FeedController();
