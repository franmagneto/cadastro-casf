import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Router from './Router';

function render() {
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
      <Router />
    </React.Fragment>,
    document.getElementById('app')
  );
}

render();
