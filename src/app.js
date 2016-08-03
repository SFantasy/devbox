/**
 * Module dependencies
 */

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/Home'
import Encoder from './components/Encoder'
import Settings from './components/Settings'
import About from './components/About'
import Error from './components/Error'

import './app.scss'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/encoder' component={Encoder} />
    <Route path='/settings' component={Settings} />
    <Route path='/about' component={About} />
    <Route path='*' component={Error} />
  </Router>,
  document.getElementById('app')
)
