import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  id: {
    type: "number",
    require: "true",
    unique: "true",
  },
  text: {
    type: "string",
    require: "true",
    unique: "true",
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
