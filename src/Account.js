import React from 'react'
import FreeComponent from './FreeComponent'
import AuthComponent from './AuthComponent'

function Account() {
  return (
    <Switch>
    <Route exact path="/" component={Account} />
    <Route exact path="/free" component={FreeComponent} />
    <Route exact path="/auth" component={AuthComponent} />
  </Switch>
  )
}

export default Account