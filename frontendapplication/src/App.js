import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/Homepage/Homepage'
import Nav from './components/Nav/Nav';
import UserPage from './components/Userpage/Userpage'
import SpotPage from './components/Spotpage/Spotpage'
function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/user' exact component={UserPage} />
            <Route path='/spot' exact component={SpotPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
