import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './screens/home'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={Home} />
        </Switch>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render()
if (module.hot) {
  module.hot.accept(render)
}
