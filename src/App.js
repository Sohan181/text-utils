import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import About from "./About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#101317";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode}></TextForm>
      {/* <About/> */}
    </>
  );
}

export default App;
