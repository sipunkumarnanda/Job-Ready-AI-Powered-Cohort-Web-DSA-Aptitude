import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import ChatComposer from "../components/ChatComposer";

import "./Home.css";

export default function Home() {
  /** ------------------------
   * STATE
   * ------------------------ */
  const [socket, setSocket] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [chats, setChats] = useState({
    c1: { title: "General Chat" },
    c2: { title: "React Chat" },
  });

  const [conversations, setConversations] = useState([]);

  /** ------------------------
   * HANDLERS Set New Chat Title on sidebar
   * ------------------------ */
  const handleNewChat = async (chatTitle) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/chat",
        { title: chatTitle || `c${Object.keys(chats).length + 1}` },
        { withCredentials: true }
      );

      const { _id, title } = response.data.chat;

      setChats((prevChats) => ({
        ...prevChats,
        [_id]: { title },
      }));

      setSelectedChatId(_id);
    } catch (err) {
      console.error("Failed to create chat:", err);
    }
  };

  /** ------------------------
   * API FUNCTIONS , get chat conversation by calling api with chatId
   * ------------------------ */
  const prevConversation = async (chatId) => {
    const response = await axios.post(
      "http://localhost:3000/api/chat/chathistory",
      { chatId },
      { withCredentials: true }
    );
    return response?.data?.messages;
  };

  const fetchMessages = async (chatId) => {
    const messages = await prevConversation(chatId);

    const formattedMessages = messages.map((message) => ({
      id: message._id,
      sender: message.role,
      text: message.content,
    }));

    setConversations(formattedMessages);
  };

  // Send a new message and add it to the existing conversation
  const handleSend = async (message) => {
    if (!selectedChatId) return;

    // console.log(message);

    setConversations((prevConvs) => [
      ...prevConvs,
      {
        id: Date.now(),
        sender: "user",
        text: message,
      },
    ]);

    socket.emit("ai-message", {
      chatId: selectedChatId,
      content: message,
    });
  };

  /** ------------------------
   *  Set Chat Titles / Load Previous Chats
   * ------------------------ */
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/chat", {
          withCredentials: true,
        });

        const chats = response.data.data.map((chat) => ({
          id: chat._id,
          title: chat.title,
        }));

        setChats(chats);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
      }
    };

    fetchChats();
  }, [chats]);

  // Socket Setup
  useEffect(() => {
    const tempSocket = io("http://localhost:3000", {
      withCredentials: true,
    });

    tempSocket.on("ai-response", (message) => {
      setConversations((prevConvs) => [
        ...prevConvs,
        {
          id: message._id || Date.now(),
          sender: "model",
          text: message.content,
        },
      ]);
    });

    setSocket(tempSocket);
  }, []);

  /** ------------------------
   * RENDER
   * ------------------------ */
  return (
    <div className="home">
      {/* Sidebar */}
      <div className={`home__sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Sidebar
          chats={chats}
          selectedChatId={selectedChatId}
          onNewChat={handleNewChat}
          onSelectChat={(chatId) => {
            setSelectedChatId(chatId);
            setIsSidebarOpen(false);
            fetchMessages(chatId);
          }}
        />
      </div>

      {/* Chat Area */}
      <div className="home__chatArea">
        <div className="home__navbar">
          <button
            className="home__menuButton"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "❌" : "☰"}
          </button>
        </div>

        <ChatScreen
          conversations={conversations}
          selectedChatId={selectedChatId}
        />
        {selectedChatId &&  <ChatComposer onSend={handleSend} />}
       
      </div>
    </div>
  );
}
