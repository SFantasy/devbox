import React, { Component } from 'react';
import {
  Input,
  Icon,
} from 'antd';

export default class EditableCell extends Component {
  state = {
    value: this.props.value,
    editable: false,
  };

  render() {
    const {
      value,
      editable,
    } = this.state;

    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-input">
              <Input
                value={value}
                onChange={(e) => {
                  this.setState({
                    value: e.target.value,
                  }, () => {
                    this.props.onChange(this.state.value);
                  });
                }}
              />
              <Icon
                type="check"
                className="editable-icon"
                onClick={() => {
                  this.setState({
                    editable: false,
                  });
                }}
              />
            </div> :
            <div className="editable-text">
              { value || '' }
              <Icon
                type="edit"
                className="editable-icon"
                onClick={() => {
                  this.setState({
                    editable: true,
                  });
                }}
              />
            </div>
        }
      </div>
    );
  }
}