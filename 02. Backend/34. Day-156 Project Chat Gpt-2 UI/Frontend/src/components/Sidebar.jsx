import React from "react";
import "./Sidebar.css";

const Sidebar = ({ chats, selectedChatId, onNewChat, onSelectChat }) => {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  return (
    <aside className="sidebar">
      {/* New Chat Button */}
      <button className="sidebar__newchat" onClick={onNewChat}>
        + New Chat
      </button>

      {/* Chat History */}
      <div className="sidebar__history">
        {Object.keys(chats).length === 0 ? (
          <div className="sidebar__empty">No chats yet</div>
        ) : (
          Object.keys(chats).map((chatId) => (
            <button
              key={chatId}
              className={`sidebar__chat ${chatId === selectedChatId ? "active" : ""}`}
              onClick={() => onSelectChat(chatId)} // Trigger onSelectChat
            >
              Chat {chatId.toUpperCase()}
            </button>
          ))
        )}
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
