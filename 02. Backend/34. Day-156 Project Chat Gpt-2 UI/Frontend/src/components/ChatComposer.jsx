import React, { useState, useRef } from "react";
import "./ChatComposer.css";

export default function ChatComposer({ onSend }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === "") return;
    onSend(input);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to calculate new height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="chatComposer">
      <textarea
        ref={textareaRef}
        className="chatComposer__input"
        placeholder="Type your message..."
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        rows={1}
      />
      <button className="chatComposer__send" onClick={handleSend}>
        ➤
      </button>
    </div>
  );
}
