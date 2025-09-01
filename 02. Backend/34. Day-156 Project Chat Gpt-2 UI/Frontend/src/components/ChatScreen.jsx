import React, { useEffect, useRef, useMemo } from "react";
import "./ChatScreen.css";

export default function ChatScreen({ chats, selectedChatId }) {
  const messagesEndRef = useRef(null);
  const messages = useMemo(() => chats[selectedChatId] || [], [chats, selectedChatId]); // Dynamically fetch messages

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages]);

  return (
    <div className="chatScreen">
      {/* Chat Messages */}
      <div className="chatScreen__messages">
        {messages.length === 0 ? (
          <div className="chatScreen__empty">No messages yet</div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`chatScreen__message ${
                msg.sender === "user" ? "user" : "ai"
              }`}
            >
              <div className="chatScreen__bubble">{msg.text}</div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
