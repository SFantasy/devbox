/**
 * Module dependencies
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

const Home = () => (
  <h1>DevBox</h1>
);

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('app')
);
