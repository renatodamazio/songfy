import React from "react";
import { Routes, Route } from "react-router-dom";
import PlayerBar from "./components/player/PlayerBar";

import Home from "./pages/Home";
import Search from "./pages/Search";

function App(): any {
  return (
    <main className="w-screen h-screen bg-black text-light flex flex-1 flex-col">
      <Search />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <PlayerBar />
    </main>
  );
}

export default App;
