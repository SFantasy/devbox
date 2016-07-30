// Module dependencies
import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.scss'
import pkg from 'json!../../../package.json'

export default class Layout extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return  (
      <div className='wrapper'>
        <ul className='nav'>
          <li>
            <h1 className='brand'>DevBox <small>{`v${pkg.version}`}</small></h1>
          </li>
          <li>
            <Link to='/rest'>
              <span className='octicon octicon-settings' /> REST test
            </Link>
          </li>
          <li>
            <Link to='/json'>
              <span className='octicon octicon-gist' /> JSON view
            </Link>
          </li>
          <li>
            <Link to='/encoder'>
              <span className='octicon octicon-file-binary' /> Encoder
            </Link>
          </li>
          <li>
            <Link to='/settings'>
              <span className='octicon octicon-gear' /> Settings
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <span className='octicon octicon-question' /> About
            </Link>
          </li>
        </ul>
        <div className='container'>{this.props.children}</div>
      </div>
    )
  }
}
