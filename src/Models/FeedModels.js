import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FeedSchema = new Schema({
  idFeed: ObjectId,
  nome: String,
  email: String,
  message: String,
});

const FeedModels = mongoose.model("feedbacks", FeedSchema);

export { FeedModels };
