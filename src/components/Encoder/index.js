// Module dependencies
import React, { Component } from 'react'
import Layout from '../Layout'

import './style.scss'

const ENCODER_TYPES = ['base64', 'md5', 'aes', 'des']

export default class Encoder extends Component {

  constructor (props) {
    super(props)

    this.state = {
      type: 0 // ENCODER_TYPES[this.state.type]
    }
  }

  render () {
    return (
      <Layout>
        <h1 className='page-title'>Encoder</h1>
        <div className='encoder-container'>
          <div className='encoder-area'>
            <textarea placeholder='Input string to be encrypted' />
          </div>
          <div className='encoder-actions'>
            <select
              className='encoder-type'
              onChange={e => {
                this.setState({
                  type: e.target.value
                })
              }}>
              {ENCODER_TYPES.map((type, index) =>
                <option key={index} value={index}>{`${type}`}</option>
              )}
            </select>
            <button className='btn' style={{marginTop:'10px'}}>Encode »</button>
            <button className='btn' style={{marginTop:'10px'}}>« Decode</button>
          </div>
          <div className='encoder-area'>
            <textarea placeholder='Input string to be decrypted' />
          </div>
        </div>
      </Layout>
    )
  }
}
