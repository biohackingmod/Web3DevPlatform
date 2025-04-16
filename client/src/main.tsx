import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Custom styling for fonts
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Inter', sans-serif;
  }
  .font-mono {
    font-family: 'Fira Code', monospace;
  }
  .bg-gradient-animate {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .syntax-highlight {
    background-color: #1E293B;
    color: #E2E8F0;
  }
  .syntax-keyword { color: #8B5CF6; }
  .syntax-string { color: #10B981; }
  .syntax-comment { color: #64748B; }
  .syntax-function { color: #60A5FA; }
  .syntax-variable { color: #F472B6; }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
