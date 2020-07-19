import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </Router>
  )
}
