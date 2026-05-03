let messages = [
  { id: 18, text: "Virat Kohli" },
  { id: 1, text: "KL Rahul" },
  { id: 7, text: "MS Dhoni" },
  { id: 17, text: "AB de Villiers" },
  { id: 45, text: "Rohit Sharma" },
];

export const getMessages = (req, res) => {
  res.json(messages);
};

export const getMessageById = (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages.find((m) => m.id === id);

  if (!message) {
    return res.status(404).json({ error: "Message not found" });
  }

  res.json(message);
};

export const createMessage = (req, res) => {
  const { id, text } = req.body;

  const exist = messages.find((m) => m.id === id);
  if (exist) {
    return res.status(400).json({ error: "ID already exists" });
  }

  const newMessage = { id, text };
  messages.push(newMessage);

  res.status(201).json(newMessage);
};

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

export const deleteMessage = (req, res) => {
  const id = parseInt(req.params.id);

  const index = messages.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Message not found" });
  }

  messages.splice(index, 1);

  res.json({ message: "Deleted successfully" });
};
