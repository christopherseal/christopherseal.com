import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import {Home} from './sections/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ThemeContext = React.createContext('light');
function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let root = document.documentElement;
    if (theme=="dark") {
      root.style.setProperty('--background',  '#000');
      root.style.setProperty('--text-color', '#fff');
    }
    else {
      root.style.setProperty('--background',  '#fff');
      root.style.setProperty('--text-color', '#000');
    }
  }, [theme]);

  const toggleTheme=()=>{
    setTheme((currentTheme)=>{
      return currentTheme=="dark"?
      "light":
      "dark"
    })
  }

  return ( <ThemeContext.Provider value={theme}>
    <button onClick={toggleTheme}>
      Theme
    </button>
    <Router> 
      <Switch>
        <Route exact path="/">
        <Home title="Hello World"/>
      </Route>
    </Switch> 
    </Router>
  </ThemeContext.Provider>
     );
}

export default App;
