import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Results";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App(): any {
  let location = useLocation();

  return (
    <main className="w-screen h-screen flex flex-1 overflow-auto  p-10 align-center justify-center flex-col">
      <TransitionGroup className={"fixed w-full h-full top-0 left-0"}>
        <div
          className={`search-component-wrapper ${
            location.pathname !== "/" ? "short-search" : ""
          }`}
        >
          <Search />
        </div>
        <CSSTransition
          key={location.pathname}
          classNames="fade h-screen"
          timeout={300}
        >
          <Routes>
            <Route path="/results/:id" element={<Results />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}

export default App;
