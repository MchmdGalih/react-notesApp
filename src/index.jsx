import React from "react";
import { createRoot } from "react-dom/client";

// import components
import NoteApp from "./components/NoteApp.jsx";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
