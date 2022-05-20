import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import About from "./About";
import Alert from "./Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      {/* <Router> */}
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact path="/" */}
            <TextForm showAlert={showAlert} mode={mode} />
          {/* />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
