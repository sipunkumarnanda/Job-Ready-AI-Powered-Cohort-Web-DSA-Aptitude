import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./App.css";

export default function App() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: Date.now() + Math.random(),
      text: "Hello! How can i assist you today?",
      sender: "bot",
      timestamp: new Date().toISOString(),
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    socket.emit("ai-message", input.trim());
    setInput("");
  };

  const incomingMessage = (text) => {
    const incomingMsg = {
      id: Date.now() + Math.random(),
      text,
      sender: "bot",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, incomingMsg]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    let socketInstance = io("http://localhost:3000");
    setSocket(socketInstance);

    socketInstance.on("ai-message-response", (response) => {
      incomingMessage(response);
    });
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Interface</div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="no-messages">No messages yet. Start chatting!</div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${
              msg.sender === "user" ? "right" : "left"
            }`}
          >
            <div className="message-text">{msg.text}</div>
            <div className="message-time">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <textarea
          rows="1"
          className="chat-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} disabled={!input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}
