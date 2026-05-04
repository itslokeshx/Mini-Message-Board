import { useEffect, useState } from "react";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage || !inputMessage.trim()) return;
    const response = await fetch("http://localhost:8000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputMessage }),
    });
    console.log("Sending:", inputMessage);
    const newMessage = await response.json();
    setMessages((prev) => [newMessage, ...prev]);
    setInputMessage("");
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/messages/${id}`, {
      method: "DELETE",
    });
    setMessages((prev) => prev.filter((msg) => msg._id !== id));
  };

  const handleEdit = async (id) => {
    const newText = prompt("Enter new message:");
    if (!newText || !newText.trim()) return;
    const response = await fetch(`http://localhost:8000/messages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
    });
    const updatedMessage = await response.json();
    setMessages((prev) =>
      prev.map((msg) => (msg._id === id ? updatedMessage : msg)),
    );
  };
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/messages/`);
    const data = await response.json();
    setMessages(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter the message!</label>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></input>
        <button type="submit">Create!</button>
      </form>

      {messages.map((msg) => (
        <div key={msg._id}>
          <h1>{msg.text}</h1>
          <button onClick={() => handleEdit(msg._id)}>Edit!</button>
          <button onClick={() => handleDelete(msg._id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
