import Joi from "joi";

const validation = (type, data) => {
  let schema;

  if (type === "register") {
    schema = Joi.object({
      nome: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(7).required(),
    });
  } else if (type === "login") {
    schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
  } else if (type === "feedback") {
    schema = Joi.object({
      nome: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      message: Joi.string().required(),
    });
  }

  return schema.validate(data, { abortEarly: false });
};

export { validation };
