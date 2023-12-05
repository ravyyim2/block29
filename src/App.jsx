import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <h1>Puppybowl React style!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
