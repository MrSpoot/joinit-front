import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Event from "./page/event";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen w-screen">
      <Event />
    </div>
  </StrictMode>
);
