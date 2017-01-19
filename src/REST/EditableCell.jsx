import React, { Component, PropTypes } from 'react';
import {
  Input,
  Icon,
} from 'antd';

export default class EditableCell extends Component {
  state = {
    value: this.props.value,
    editable: false,
  };

  propTypes = {
    onChange: PropTypes.func,
  };

  defaultProps = {
    onChange() {}
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

                  });
                }}
              />
              <Icon
                type="check"
                className="editable-icon"
                onClick={() => {
                  this.setState({
                    editable: false,
                  }, () => {
                    this.props.onChange(this.state.value);
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