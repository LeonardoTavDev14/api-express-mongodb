import { validation } from "../validators/test.js";

const validateMiddleware = (type) => {
  return (request, response, next) => {
    const { error } = validation(type, request.body);
    if (error) {
      return response.status(400).json({
        message: "Erro de validação encontrado",
        errors: error.details.map((err) => err.message),
      });
    }

    next();
  };
};

export { validateMiddleware };
