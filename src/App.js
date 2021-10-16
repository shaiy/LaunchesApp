import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import './style.css';

import Launches from './Components/Launches';

const App = () => {
  return (
    <ChakraProvider>
      <div className="">
        <Router>
          <header>
            <Link to="/">
              <Heading textAlign="center" margin="2rem" size="4xl">
                Launches App
              </Heading>
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
