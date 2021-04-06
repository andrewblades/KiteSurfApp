import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/Homepage/Homepage'
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
