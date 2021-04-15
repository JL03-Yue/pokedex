import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/Landing'
import HomePage from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Router>
                <div className="navbar">
                    {/* <nav className="link-container">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/landing" className="link">Landing</Link>
                    </nav> */}
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/landing" component={LandingPage} />
                        
                    </Switch>
                </div>
            </Router>
    </div>
  );
}

export default App;
