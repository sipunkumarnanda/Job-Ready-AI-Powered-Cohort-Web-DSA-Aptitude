import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import ChatComposer from "../components/ChatComposer";
import "./Home.css";

export default function Home() {
  const [chats, setChats] = useState({
    c1: [
      { id: 1, sender: "ai", text: "Hello! How can I help you today?" },
      { id: 2, sender: "user", text: "Tell me a joke." },
      { id: 3, sender: "ai", text: "Why don’t programmers like nature? Too many bugs! 🐛" },
    ],
    c2: [
      { id: 1, sender: "user", text: "What is React?" },
      { id: 2, sender: "ai", text: "React is a JavaScript library for building UIs." },
    ],
  });

  const [selectedChatId, setSelectedChatId] = useState("c1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNewChat = () => {
    const newId = `c${Object.keys(chats).length + 1}`;
    setChats({
      ...chats,
      [newId]: [],
    });
    setSelectedChatId(newId);
  };

  const handleSend = (message) => {
    if (!selectedChatId) return;

    setChats((prev) => ({
      ...prev,
      [selectedChatId]: [
        ...prev[selectedChatId],
        { id: Date.now(), sender: "user", text: message },
        { id: Date.now() + 1, sender: "ai", text: "🤖 Got it! (simulated reply)" },
      ],
    }));
  };

  return (
    <div className="home">
      <div className={`home__sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Sidebar
          chats={chats}
          selectedChatId={selectedChatId}
          onNewChat={handleNewChat}
          onSelectChat={(chatId) => {
            setSelectedChatId(chatId);
            setIsSidebarOpen(false); // Close the sidebar when a chat is selected
          }}
        />
      </div>

      <div className="home__chatArea">
        <div className="home__navbar">
          <button
            className="home__menuButton"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "❌" : "☰"} {/* Dynamically render the icon */}
          </button>
        </div>
        <ChatScreen chats={chats} selectedChatId={selectedChatId} />
        <ChatComposer onSend={handleSend} />
      </div>
    </div>
  );
}
