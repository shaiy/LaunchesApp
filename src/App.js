import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ChakraProvider, Heading, useColorMode, Button, ThemeProvider } from '@chakra-ui/react';
import theme from './theme';
import './style.css';

import Launches from './Components/Launches';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
};

export default App;
