import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/landing'
import About from './components/about'

export default (
    <Switch>
        <Route exact path="/"      component={Landing}/>
        <Route       path="/about" component={About}/>
    </Switch>
)