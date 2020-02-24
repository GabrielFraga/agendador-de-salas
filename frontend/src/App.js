import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
