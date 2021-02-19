import logo from './logo.svg';
import './App.css';
import {Home} from './sections/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return ( <Router> <Switch>
    <Route exact path="/">
      <Home title="Hello World"/>
    </Route>
  </Switch> </Router> );
}

export default App;
