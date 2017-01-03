import React, { Component } from 'react';
import {
  Select,
  Button,
  Input,
} from 'antd';

import './style.scss';

const Option = Select.Option;

const ENCODER_TYPES = ['base64', 'md5'];

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

  encode() {
    const { type, text } = this.state;

    let encodedText = '';

    switch (type) {
      case 'base64':
        encodedText = new Buffer(text).toString('base64');
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
      case 'base64':
        decodedText = new Buffer(text, 'base64');
        break;
      default:
    }

    this.setState({
      text: decodedText,
    });
  }
}
