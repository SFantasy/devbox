import React, { Component } from 'react'
import Layout from '../Layout'

export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Layout>
        <div style={{ flexDirection: 'column', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ margin: '0', fontWeight: '200', fontSize: '48px', color: '#666' }}>DevBox</h1>
          <h2 style={{ margin: '0', letterSpacing: '2px', fontWeight: '100', fontSize: '24px', color: '#999' }}>Developer tools in a BOX</h2>
        </div>
      </Layout>
    )
  }
}