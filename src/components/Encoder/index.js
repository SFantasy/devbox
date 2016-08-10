// Module dependencies
import React, { Component } from 'react'
import Layout from '../Layout'
import crypto from 'crypto'

import './style.scss'

const ENCODER_TYPES = ['base64', 'md5']

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
            <textarea
              placeholder='Input string to be encrypted'
              ref='input' />
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
            <button className='btn' style={{marginTop:'10px'}} onClick={this._encode.bind(this)}>Encode »</button>
            <button className='btn' style={{marginTop:'10px'}} onClick={this._decode.bind(this)}>« Decode</button>
          </div>
          <div className='encoder-area'>
            <textarea placeholder='Input string to be decrypted' ref='output' />
          </div>
        </div>
      </Layout>
    )
  }

  _encode () {
    let input_string = this.refs.input.value
    let { type } = this.state
    let output = ''

    switch (parseInt(type, 10)) {
      case 0:
        output = new Buffer(input_string).toString('base64')
        break
      case 1:
        output = crypto.createHash('md5').update(input_string).digest('hex')
        break
      default:
        alert('Not valid encode type')
    }

    this.refs.output.value = output
  }

  _decode () {
    let output_string = this.refs.output.value
    let { type } = this.state
    let decoded_string = ''

    switch (type) {
      case 0:
        decoded_string = new Buffer(output_string, 'base64').toString()
        break
      default:
        alert('Not valid decode type')
    }

    this.refs.input.value = decoded_string

  }
}
