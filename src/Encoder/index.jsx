import React, { Component } from 'react';
import {
  Select,
  Button,
  Input,
  message,
} from 'antd';
import crypto from 'crypto';

import './style.scss';

const Option = Select.Option;

const ENCODER_TYPES = ['BASE64', 'MD5', 'SHA'];

export default class Encoder extends Component {
  constructor(props) {
    super(props);

    this.encode = this.encode.bind(this);
    this.decode = this.decode.bind(this);

    this.state = {
      type: ENCODER_TYPES[0],
      text: '',
    };
  }

  encode() {
    const { type, text } = this.state;

    let encodedText = '';

    switch (type) {
      case 'BASE64':
        encodedText = new Buffer(text).toString('base64');
        break;
      case 'MD5':
        let md5 = crypto.createHash('md5');
        encodedText = md5.update(text).digest('hex');
        break;
      default:
    }

    this.setState({
      text: encodedText,
    });
  }

  decode() {
    const { type, text } = this.state;

    let decodedText = '';

    switch (type) {
      case 'BASE64':
        decodedText = new Buffer(text, 'base64');
        break;
      default:
        message.warn(`${type} doesn't suppor decode.`);
    }

    this.setState({
      text: decodedText,
    });
  }

  render() {
    const {
      type,
      text,
    } = this.state;

    return (
      <div className="encoder">
        <div className="encoder-bar">
          <span>Type: </span>
          <Select
            style={{ width: 100 }}
            value={type}
            onChange={(value) => {
              this.setState({
                type: value,
              });
            }}
          >
            {ENCODER_TYPES.map((t, index) =>
              <Option key={index} value={t}>{t}</Option>
            )}
          </Select>
          <Button onClick={this.encode}>Encode</Button>
          <Button onClick={this.decode}>Decode</Button>
        </div>
        <Input
          type="textarea"
          value={text}
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
        />
      </div>
    );
  }

}
