import React, { Component } from 'react';
import { Icon } from 'antd';

export default class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <h2>DevBox</h2>
        <p className="slogn">Developer tools in a box</p>
        <p className="link"><Icon type="github" /> View on <a href="https://github.com/SFantasy/devbox">Github</a></p>
      </div>
    );
  }
}
