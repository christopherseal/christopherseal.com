import React, { useState, useEffect } from 'react';
import './App.css';
import {Home} from './sections/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const ThemeContext = React.createContext('light');
function App() {

  const [theme, setTheme] = useState("light");
let currentTheme = theme;

useEffect(() => {
  let root = document.documentElement;
  root.style.setProperty('--text-color', theme === "dark" ? "#fff" : "#000");
  root.style.setProperty('--background', theme === "dark" ? "#000" : "#fff");
}, [theme]);

const toggleTheme=()=>{
  setTheme(theme === "dark" ? "light" : "dark");
  currentTheme = currentTheme === "dark"?
  "light":
  "dark"
}

  return (
    <ThemeContext.Provider value={theme}>
      <div className="toggleButton">
        <button onClick={toggleTheme}>
          <span className="circle" />
        </button>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home title="Christopher Seal "/>
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
  }

export default App;
