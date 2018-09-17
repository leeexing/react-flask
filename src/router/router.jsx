import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './app'
import { Login } from 'components/Login'

const host = ''
const Routes = () => (
  <Router>
    <React.Fragment>
      <Route path={`/${host}login`} exact component={Login}/>
      <Route component={AppRoutes}/>
    </React.Fragment>
  </Router>
)

export default Routes
