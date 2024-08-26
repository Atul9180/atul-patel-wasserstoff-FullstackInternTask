import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StateContextProvider } from "./context/StateContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
    <ToastContainer />
  </StrictMode>
);
