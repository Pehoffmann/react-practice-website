import React, { useState } from "react";
import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const lightThemeAsDefault =
    new Date().getHours() > 8 && new Date().getHours() < 18;
  const [isLightTheme, setIsLightTheme] = useState(lightThemeAsDefault);
  const toggleTheme = () => setIsLightTheme(!isLightTheme);
  return (
    <div className={`App${!isLightTheme ? " dark" : ""}`}>
      <Header themeClick={toggleTheme} />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
