import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Todo from 'pages/todo'
import HomePage from 'pages/homepage'
import NavBar from 'components/NavBar'
import NotFoundRoute from 'pages/404page'
import ServerError from 'pages/500page'

const host = ''
const Routes = () => (
  <Router>
    <React.Fragment>
      <NavBar/>
      <main className="app-main">
        <Switch>
          <Route path={`/${host}todo`} component={Todo}></Route>
          <Route path={`/${host}500`} component={ServerError}></Route>
          <Route path={`/${host}`} exact component={HomePage}></Route>
          <Route path={'/*'} component={NotFoundRoute}></Route>
        </Switch>
      </main>
    </React.Fragment>
  </Router>
)

export default Routes
