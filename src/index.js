import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import App from './App';
import theme from './theme';

import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
