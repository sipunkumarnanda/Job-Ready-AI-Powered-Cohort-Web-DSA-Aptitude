
import React, { useState } from "react"; 
import "./Sidebar.css";


const Sidebar = ({ chats, selectedChatId, onNewChat, onSelectChat }) => { 
  const [newChatTitle, setNewChatTitle] = useState(""); 
  const email = localStorage.getItem("email"); 
  const name = localStorage.getItem("name");



  return (
    <aside className="sidebar"> 
      {/* Input for New Chat Title */} 
      <input 
        type="text" 
        className="sidebar__input" 
        placeholder="Enter chat title" 
        value={newChatTitle} 
        onChange={(e) => setNewChatTitle(e.target.value)} 
      /> 

      {/* New Chat Button */} 
      <button 
        className="sidebar__newchat" 
        onClick={() => { 
          if (newChatTitle.trim()) { 
            onNewChat(newChatTitle); 
            setNewChatTitle(""); 
          } 
        }} 
      > 
        + New Chat 
      </button> 

      {/* Chat History */} 
      <div className="sidebar__history"> 
        {Object.entries(chats).reverse().map(([chatId, chat]) => ( 
          <button 
            key={chatId} 
            className={`sidebar__chat ${chatId === selectedChatId ? "active" : ""}`} 
            onClick={() => {
              // console.log("Clicked chatId:", chat.id);
              onSelectChat(chat.id);
            }} 
          > 
            {chat.title.toUpperCase()} 
          </button> 
        ))} 
      </div> 

      {/* User Profile */} 
      <div className="sidebar__profile"> 
        <div className="sidebar__avatar">👤</div> 
        <div className="sidebar__info"> 
          <span className="sidebar__name">{name}</span> 
          <span className="sidebar__email">{email}</span> 
        </div> 
      </div> 
    </aside> 
  ); 
}; 

export default Sidebar;
