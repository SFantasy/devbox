import React, { Component } from 'react'
import Layout from '../Layout'
import content from 'html!markdown!./content.md'

export default class About extends Component {
  render () {
    return (
      <Layout>
        <h1 className='page-title'>About</h1>
        <main className='page-md' dangerouslySetInnerHTML={{__html: content}} />
      </Layout>
    )
  }
}
