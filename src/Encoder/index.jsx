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

const ENCODER_TYPES = ['BASE64', 'MD5', 'SHA1'];

export default class Encoder extends Component {
  constructor(props) {
    super(props);

    this.encode = this.encode.bind(this);
    this.decode = this.decode.bind(this);
    this.clear = this.clear.bind(this);

    this.state = {
      type: ENCODER_TYPES[0],
      text: '',
    };
  }

  encode() {
    const { type, text } = this.state;

    let encodedText = '';
    let cryptedType;

    switch (type) {
      case 'BASE64':
        encodedText = new Buffer(text).toString('base64');
        break;
      case 'MD5':
        cryptedType = crypto.createHash('md5');
        encodedText = cryptedType.update(text).digest('hex');
        break;
      case 'SHA1':
        cryptedType = crypto.createHash('sha1');
        encodedText = cryptedType.update(text).digest('hex');
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
        try {
          decodedText = JSON.stringify(JSON.parse(decodedText), null, '  ');
        } catch (err) {
          //
        }
        break;
      default:
        message.warn(`${type} doesn't suppor decode.`);
    }

    this.setState({
      text: decodedText,
    });
  }

  clear() {
    this.setState({
      text: '',
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
          <Button onClick={this.clear}>Clear</Button>
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
