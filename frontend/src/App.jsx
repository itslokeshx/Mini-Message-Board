import { useEffect, useState } from "react";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <h1 key={msg._id}>{msg.text}</h1>
      ))}
    </>
  );
}

export default App;
