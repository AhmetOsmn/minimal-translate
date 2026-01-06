import ReactDOM from "react-dom/client";
import "../styles/globals.css";
import "../i18n/i18n";
import App from "./App";

// Global exception handlers - catch unhandled errors
window.onerror = (message, source, lineno, colno, error) => {
  // Log the error for debugging but don't show technical details to user
  console.error("Unhandled error:", { message, source, lineno, colno, error });
  // Return true to prevent default error handling
  return true;
};

window.addEventListener("unhandledrejection", (event: PromiseRejectionEvent) => {
  // Log the rejection for debugging but don't show technical details to user
  console.error("Unhandled promise rejection:", event.reason);
  // Prevent default error handling
  event.preventDefault();
});

// Apply dark mode on startup
window.settingsAPI?.getConfig().then((config) => {
  const darkMode = config?.darkMode ?? true;
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
