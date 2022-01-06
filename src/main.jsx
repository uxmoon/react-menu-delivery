import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./routes/menu";
import Stores from "./routes/stores";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      <Route path="stores" element={<Stores />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
