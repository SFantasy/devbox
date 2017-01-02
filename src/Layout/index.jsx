import React, { Component } from 'react';

import AppMenu from './Menu';

const getActiveMenuItem = (props) => {
  const { pathname } = props.location;
  return pathname === '/' ? 'home' : props.location.pathname;
};

export default class Layout extends Component {
  render() {
    const { props } = this;
    const activeMenuItem = getActiveMenuItem(props);

    return (
      <div className="wrapper">
        <AppMenu />
        <div className="container">{props.children}</div>
      </div>
    );
  }
}
