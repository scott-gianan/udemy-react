//Components
import Navbar from "./Components/Navigation/Navbar";
import ListBox from "./Components/Main/ListBox/ListBox";
import WatchedBox from "./Components/Main/WatchedBox/WatchedBox";
//react hooks
import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <ListBox />
        <WatchedBox />
      </main>
    </>
  );
}
