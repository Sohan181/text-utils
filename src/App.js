import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import About from "./About";
import Alert from "./Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#101317";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils - Home (Dark Mode)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Home (Light Mode)";
    }
  };
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} mode={mode}></TextForm>
      {/* <About/> */}
    </>
  );
}

export default App;
