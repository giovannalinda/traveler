import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Cities, Home } from 'pages'
import { HOME, CITIES } from 'routes'
import { GlobalStyle } from 'ui'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={CITIES} component={Cities} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
