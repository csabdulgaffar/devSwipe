import React from "react";
import ReactDOM from "react-dom/client";

// import App from './App.jsx'

import Header from "./components/common/Header/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
  </React.StrictMode>
);
