import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function render() {
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </React.Fragment>,
    document.getElementById('app')
  );
}

render();
