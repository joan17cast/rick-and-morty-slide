import React from "react";
import Home from "@/pages/home.tsx";
import ReactDOM from "react-dom/client";

import "@/assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
