import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Event from "./page/event";
import Explorer from "./page/explorer";
import Login from "./page/login";
import Register from "./page/register";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Explorer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </div>
  </StrictMode>
);
