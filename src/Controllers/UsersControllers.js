import { UsersModels } from "../models/UsersModels.js";
import { hashPassword } from "../services/passwordService.js";
import { comparePassword } from "../services/passwordService.js";
import { errorResponse } from "../utils/errorResponse.js";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

class UsersControllers {
  async create(request, response) {
    try {
      const { nome, email, password } = request.body;
      const userAlreadyExists = await UsersModels.findOne({ email });
      if (userAlreadyExists)
        return errorResponse(response, 400, "E-mail já foi cadastrado!");

      const passwordHash = await hashPassword(password);

      const userCreated = await UsersModels.create({
        nome,
        email,
        password: passwordHash,
      });

      return response.status(200).json(userCreated);
    } catch (err) {
      console.error("Erro ao criar usuário", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      if (!id) return errorResponse(response, 400, "Campo ID é necessário");

      const userAlreadyExists = await UsersModels.findByIdAndDelete(id);
      if (!userAlreadyExists)
        return errorResponse(response, 404, "Usuário não encontrado");

      return response
        .status(200)
        .json({ message: "Usuário deletado com sucesso!" });
    } catch (err) {
      console.error("Erro ao deletar usuário", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }

  async getUserByID(request, response) {
    try {
      const { id } = request.params;

      if (!id) return errorResponse(response, 400, "Campo ID é necessário");

      const userAlreadyExists = await UsersModels.findById(id).select(
        "-password"
      );
      if (!userAlreadyExists)
        return errorResponse(response, 404, "Usuário não encontrado");

      return response.status(200).json(userAlreadyExists);
    } catch (err) {
      console.error("Erro ao listar usuário", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }

  async getAllUsers(request, response) {
    try {
      const users = await UsersModels.find().select("-password");

      if (!users.length)
        return errorResponse(response, 404, "Nenhum usuário encontrado!");

      return response.status(200).json(users);
    } catch (err) {
      console.error("Erro ao listar usuários", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;

      if (!id) return errorResponse(response, 400, "O campo ID é necessário");

      const { nome, email, password } = request.body;

      let userData = { nome, email };

      if (password) {
        userData.password = await hashPassword(password);
      }

      const userUpdated = await UsersModels.findByIdAndUpdate(id, userData, {
        new: true,
      });
      if (!userUpdated)
        return errorResponse(response, 404, "Usuário não encontrado");

      return response
        .status(200)
        .json({ message: "Usuário atualizado com sucesso!" });
    } catch (err) {
      console.error("Erro ao atualizar usuário", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }

  async login(request, response) {
    try {
      const { email, password } = request.body;
      const userAlreadyExists = await UsersModels.findOne({ email });
      if (!userAlreadyExists)
        return errorResponse(response, 404, "Usuário não encontrado");

      const isPasswordValid = await comparePassword(
        password,
        userAlreadyExists.password
      );
      if (!isPasswordValid)
        return errorResponse(response, 400, "Senha incorreta");

      const token = jwt.sign(
        { objectIdentify: userAlreadyExists._id },
        process.env.SECRET_KEY,
        {
          expiresIn: 300,
        }
      );
      return response.json({ auth: true, token });
    } catch (err) {
      console.error("Erro ao logar com usuário", err.message);
      errorResponse(response, 500, "Falha ao capturar requisição");
    }
  }
}

export default new UsersControllers();
