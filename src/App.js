import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';

import Launches from './Components/Launches';

const App = () => {
  return (
    <ChakraProvider>
      <div className="">
        <Router>
          <header>
            <Link to="/">
              <h1>Launches App</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/">
              <Launches />
            </Route>
          </Switch>
        </Router>
      </div>
    </ChakraProvider>
  );
};

export default App;
