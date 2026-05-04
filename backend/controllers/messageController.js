import Message from "../models/Messages.js";

//GET
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST
export const createMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const newMessage = await Message.create({ text });
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(" POST ERROR:", error);
    res.status(500).json({ error: error.message });
    console.log(" POST ERROR:", error);
  }
};

//PUT
export const updateMessage = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const updated = await Message.findByIdAndUpdate(
      req.params.id,
      { text },
      { returnDocument: "after" },
    );

    if (!updated) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE
export const deleteMessage = async (req, res) => {
  try {
    const deleted = await Message.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
