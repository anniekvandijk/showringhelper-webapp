import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import addstore from '../shared/store';
import Routes from '../shared/Routes';
import theme from '../shared/theme';

const App = () => (
  <Provider store={addstore}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
