import 'react-hot-loader'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'typeface-roboto/index.css'
import Home from './screens/home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default hot(App)
