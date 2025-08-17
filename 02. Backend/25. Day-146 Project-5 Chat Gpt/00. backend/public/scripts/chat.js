
// scripts/chat.js

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.querySelector(".send-btn");
  const composerInput = document.querySelector("#composerInput");
  const messagesContainer = document.querySelector("#messages");

  const menuBtn = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeSidebar");

  // Add a new chat message
  function addMessage(text, sender = "user") {
    if (!text.trim()) return; // ignore empty messages

    const messageEl = document.createElement("div");
    messageEl.classList.add("message", sender);

    const bubbleEl = document.createElement("div");
    bubbleEl.classList.add("bubble");
    bubbleEl.textContent = text;

    messageEl.appendChild(bubbleEl);
    messagesContainer.appendChild(messageEl);

    // scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Handle send action
  function handleSend() {
    const text = composerInput.value;
    addMessage(text, "user");

    composerInput.value = "";

    // fake assistant reply (replace with API call later)
    setTimeout(() => {
      addMessage("This is a bot reply.", "assistant");
    }, 600);
  }

  // Sidebar toggle for mobile
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });

  // Send button click
  sendBtn.addEventListener("click", handleSend);

  // Send on Enter (Shift+Enter for newline)
  composerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });
});
