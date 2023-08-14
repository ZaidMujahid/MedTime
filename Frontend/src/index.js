import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RemindersContextProvider } from "./context/ReminderContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RemindersContextProvider>
        <App />
      </RemindersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
