import mongoose from "mongoose";
import "dotenv/config";

const testConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD_DB}@${process.env.DATABASE}.zwabm.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DATABASE}`
    );
    console.log("Conexão com o banco de dados efetuada com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar com o banco de dados", err.message);
  }
};

export { testConnection };
