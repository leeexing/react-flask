import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BackTop } from 'antd'
import Todo from 'pages/todo'
import HomePage from 'pages/homepage'
import NavBar from 'components/NavBar'
import NotFoundRoute from 'pages/404page'
import ServerError from 'pages/500page'
import Footer from 'components/Footer'
import Chart from 'pages/Chart'
import Topic from 'pages/Topic'

const host = ''
const Routes = () => (
  <React.Fragment>
    <NavBar />
    <main className="app-main">
      <Switch>
        <Route path={`/${host}todo`} component={Todo}></Route>
        <Route path={`/${host}500`} component={ServerError}></Route>
        <Route path={`/${host}chart`} component={Chart}></Route>
        <Route path={`/${host}topic`} component={Topic}></Route>
        <Route path={`/${host}`} exact component={HomePage}></Route>
        <Route path={'/*'} component={NotFoundRoute}></Route>
      </Switch>
    </main>
    <Footer/>
    <BackTop/>
  </React.Fragment>
)

export default Routes
