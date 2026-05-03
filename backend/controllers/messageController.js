import Message from "../models/Messages.js";

export const getMessages = (req, res) => {
  res.json(messages);
};
//GET
export const getMessageById = (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages.find((m) => m.id === id);

  if (!message) {
    return res.status(404).json({ error: "Message not found" });
  }

  res.json(message);
};

//POST

//PUT
export const updateMessage = (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;

  const message = messages.find((m) => m.id === id);

  if (!message) {
    return res.status(404).json({ error: "Message not found" });
  }

  message.text = text;
  res.json(message);
};

//DELETE
export const deleteMessage = (req, res) => {
  const id = parseInt(req.params.id);

  const index = messages.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Message not found" });
  }

  messages.splice(index, 1);

  res.json({ message: "Deleted successfully" });
};
