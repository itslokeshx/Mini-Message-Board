import Message from "../models/Messages.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//GET
export const getMessageById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const message = await Message.findOne({ id });

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST
export const createMessage = async (req, res) => {
  try {
    const { id, text } = req.body;
    if (id == undefined || !text) {
      return res.status(400).json({ error: "id and text both needed!" });
    }
    const exists = await Message.findOne({ id });
    if (exists) {
      return res.status(400).json({ error: "ID Already exist!" });
    }
    const newMessage = await Message.create({ id, text });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT
export const updateMessage = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const updated = await Message.findOneAndUpdate(
      { id },
      { text },
      { new: true },
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
    const id = parseInt(req.params.id);

    const deleted = await Message.findOneAndDelete({ id });

    if (!deleted) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
