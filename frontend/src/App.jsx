import { useEffect, useState, useCallback } from "react";
import { 
  Send, 
  Pencil, 
  Trash2, 
  MessageSquare, 
  Plus,
  X,
  Check
} from "lucide-react";
import "./index.css";

const API_URL = "http://localhost:8000/messages";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [editText, setEditText] = useState("");

  // Show toast notification
  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // Fetch all messages
  const fetchMessages = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch messages");
      const data = await response.json();
      setMessages(data.reverse()); // Newest first
    } catch (error) {
      showToast("Failed to load messages", "error");
    }
  }, [showToast]);

  // Initial load
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  // Create new message
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage) return;

    setIsLoading(true);
    try {
      // Generate next available ID
      const nextId = messages.length > 0 
        ? Math.max(...messages.map(m => m.id || 0)) + 1 
        : 1;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: nextId, text: trimmedMessage }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create message");
      }

      const newMessage = await response.json();
      setMessages(prev => [newMessage, ...prev]);
      setInputMessage("");
      showToast("Message created successfully");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete message
  const handleDelete = async (id, messageId) => {
    try {
      const response = await fetch(`${API_URL}/${messageId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete message");

      setMessages(prev => prev.filter(msg => msg._id !== id));
      showToast("Message deleted");
    } catch (error) {
      showToast("Failed to delete message", "error");
    }
  };

  // Open edit modal
  const openEditModal = (message) => {
    setEditingMessage(message);
    setEditText(message.text);
  };

  // Close edit modal
  const closeEditModal = () => {
    setEditingMessage(null);
    setEditText("");
  };

  // Save edited message
  const handleSaveEdit = async () => {
    const trimmedText = editText.trim();
    if (!trimmedText) return;

    try {
      const response = await fetch(`${API_URL}/${editingMessage.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmedText }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update message");
      }

      const updatedMessage = await response.json();
      setMessages(prev =>
        prev.map(msg => (msg._id === updatedMessage._id ? updatedMessage : msg))
      );
      closeEditModal();
      showToast("Message updated successfully");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Header */}
        <header className="header">
          <h1>
            <MessageSquare style={{ display: "inline", marginRight: "12px", verticalAlign: "middle" }} size={32} />
            Message Board
          </h1>
          <p>A clean, minimal space for your thoughts</p>
        </header>

        {/* Input Section */}
        <section className="input-section">
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-group">
              <label htmlFor="message" className="input-label">
                <Plus size={14} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />
                New Message
              </label>
              <textarea
                id="message"
                className="message-input"
                placeholder="What's on your mind?"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                rows={2}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={!inputMessage.trim() || isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner" />
              ) : (
                <>
                  <Send size={18} />
                  Post
                </>
              )}
            </button>
          </form>
        </section>

        {/* Messages Section */}
        <section className="messages-section">
          <h2 className="section-title">
            Messages ({messages.length})
          </h2>

          {messages.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">
                <MessageSquare size={48} strokeWidth={1} />
              </div>
              <p className="empty-state-text">
                No messages yet. Start the conversation!
              </p>
            </div>
          ) : (
            <div className="messages-grid">
              {messages.map((msg) => (
                <article key={msg._id} className="message-card">
                  <div className="message-content">
                    {msg.text}
                  </div>
                  
                  <div className="message-meta">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span className="message-id">#{msg.id}</span>
                      <span className="message-date">
                        {formatDate(msg.createdAt)}
                      </span>
                    </div>
                    
                    <div className="message-actions">
                      <button
                        className="action-btn edit"
                        onClick={() => openEditModal(msg)}
                        title="Edit message"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => handleDelete(msg._id, msg.id)}
                        title="Delete message"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Edit Modal */}
      {editingMessage && (
        <div className="modal-overlay" onClick={closeEditModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">
              <Pencil size={20} style={{ display: "inline", marginRight: "8px", verticalAlign: "middle" }} />
              Edit Message
            </h3>
            <textarea
              className="message-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              rows={4}
              autoFocus
            />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={closeEditModal}>
                <X size={16} style={{ marginRight: "6px" }} />
                Cancel
              </button>
              <button 
                className="submit-btn" 
                onClick={handleSaveEdit}
                disabled={!editText.trim()}
              >
                <Check size={16} style={{ marginRight: "6px" }} />
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default App;
