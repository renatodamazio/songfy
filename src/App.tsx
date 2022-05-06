import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayerBar from "./components/player/PlayerBar";

import Home from "./pages/Home";
import Results from "./pages/Results";
import Search from "./pages/Search";
import Title from "./components/Title";

function App(): any {
  const location = useLocation();
  return (
    <main className="w-screen h-screen bg-black text-light flex flex-1 flex-col overflow-auto">
      <Search />
      <Title text={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results/*" element={<Results />} />
      </Routes>
    </main>
  );
}

export default App;
