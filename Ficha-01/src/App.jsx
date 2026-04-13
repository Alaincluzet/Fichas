import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import CounterComponent from "./Components/CounterComponent";
import HideNotHide from "./Components/HideNotHide";

function App() {
  return (
    <>
      <CounterComponent />
      <HideNotHide />
    </>
  );
}

export default App;
