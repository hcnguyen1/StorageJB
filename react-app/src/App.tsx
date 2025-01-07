import React, { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import Lobby from "./Pages/Lobby";
import Profile from "./Pages/Profile";
import Videos from "./Pages/Videos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
