import React, { useEffect, useRef } from "react";
import "./ChatScreen.css";

export default function ChatScreen({ conversations }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [conversations]);

  return (
    <div className="chatScreen">
      {/* Chat Messages */}
      <div className="chatScreen__messages">
        {conversations.length === 0 ? (
          <div className="chatScreen__empty">No messages yet</div>
        ) : (
          conversations.map((msg) => (
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
