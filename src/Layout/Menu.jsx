import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  Icon,
  Menu,
} from 'antd';

const MenuItem = Menu.Item;
const Divider = Menu.Divider;

export default class AppMenu extends Component {
  render() {
    return (
      <aside className="menu">
        <a href="/"><h1 className="brand">DevBox</h1></a>
        <Menu>
          <MenuItem key="encoder">
            <Link to="/encoder">
              <Icon type="file-unknown" /> Encoder
            </Link>
          </MenuItem>
          <MenuItem key="rest">
            <Link to="/rest">
              <Icon type="switcher" /> REST tool
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem key="setting">
            <Link to="/setting">
              <Icon type="setting" /> Setting
            </Link>
          </MenuItem>
          <MenuItem key="about">
            <Link to="/about">
              <Icon type="info-circle-o" /> About
            </Link>
          </MenuItem>
        </Menu>
      </aside>
    );
  }
}
