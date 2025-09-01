import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";

const App = () => {
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.body.setAttribute("data-theme", systemTheme);
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;