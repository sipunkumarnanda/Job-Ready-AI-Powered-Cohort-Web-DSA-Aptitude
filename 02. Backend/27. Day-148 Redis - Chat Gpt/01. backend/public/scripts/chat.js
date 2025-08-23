// scripts/chat.js

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.querySelector(".send-btn");
  const composerInput = document.querySelector("#composerInput");
  const messagesContainer = document.querySelector("#messages");

  const menuBtn = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeSidebar");

  // Add a new chat message
  function createMessage(text, sender = "user") {
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
    socket.emit("ai-message", text);
    createMessage(text, "user");

    composerInput.value = "";
  }

  // ✅ Attach the AI response listener only once (outside any function). If placed inside createMessage() or handleSend(), a new listener . would be registered on every send, causing duplicate responses.
socket.on("ai-message-response", (response) => {
  createMessage(response, "assistant");
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

  // Sidebar toggle for mobile
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });

  // Logout - feature

  const logoutBtn = document.querySelector(".logout-btn");

  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault(); // stop default link behavior if it's <a>

    // Send GET request to logout route
    const res = await fetch("/auth/logout", {
      method: "GET",
      credentials: "include", // important: send cookies
    });

    if (res.redirected) {
      // Express redirect works automatically
      window.location.href = res.url;
    } else {
      // Fallback: manually redirect
      window.location.href = "/auth/login";
    }
  });
});
