import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Link to="/">
          <h1>Launches App</h1>
        </Link>
        <Switch>
          <Route path="/launch/:id">
            <div>Single launche page</div>
          </Route>
          <Route path="/">
            <div>Multiple launches page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
