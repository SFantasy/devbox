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

    this.state = {
      type: ENCODER_TYPES[0],
    };
  }

  render() {
    const { type } = this.state;

    return (
      <div className="encoder">
        <div className="encoder-bar">
          <span>Type: </span>
          <Select style={{ width: 100 }} value={type}>
            {ENCODER_TYPES.map((t, index) =>
              <Option key={index} value={t}>{t}</Option>
            )}
          </Select>
          <Button>Encode</Button>
          <Button>Decode</Button>
        </div>
        <Input type="textarea" />
      </div>
    );
  }
}
