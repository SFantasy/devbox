/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'antd/dist/antd.css';

import Layout from './Layout';
import Home from './Home';
import Encoder from './Encoder';
import './app.scss';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="/Encoder" component={Encoder} />
    </Route>
  </Router>, document.getElementById('app'));
