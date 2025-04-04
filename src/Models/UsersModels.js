import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UsersSchema = new Schema({
  id: ObjectId,
  nome: String,
  email: String,
  password: String,
  resetToken: String,
  resetExpiredToken: Date,
});

const UsersModels = mongoose.model("users", UsersSchema);

export { UsersModels };
