import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function Router(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
