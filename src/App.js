import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Home } from './sections/Home';
import { Contact } from './sections/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty('--text-color', '#fff');
      root.style.setProperty('--background', '#000');
      root.style.setProperty('--tile-gradient', 'linear-gradient(135deg, #2c3e50, #4ca1af)');
    } else {
      root.style.setProperty('--text-color', '#000');
      root.style.setProperty('--background', 'linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%)');
      root.style.setProperty('--tile-gradient', 'linear-gradient(135deg, #e0f7fa, #fbe9e7)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className="app-wrapper">
          <Navbar toggleTheme={toggleTheme} />
          <main>
            <Switch>
              <Route exact path="/">
                <Home title="Hi There!" />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
