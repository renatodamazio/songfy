import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

function App(): any {
  return (
    <main className="w-screen h-screen flex flex-1 flex-col overflow-auto">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;
