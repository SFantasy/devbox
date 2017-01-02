import React, { Component } from 'react';
import content from 'html!markdown!./content.md';

export default class About extends Component {
  render() {
    return (
      <main
        className="page-md"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    );
  }
}
