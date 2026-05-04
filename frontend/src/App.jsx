import { useEffect, useState } from "react";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/messages/`);
      const data = await response.json();
      setMessages(data);
    };
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
