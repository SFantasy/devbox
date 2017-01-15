/**
 * Module dependencies
 */

import React, { Component } from 'react';
import request from 'superagent';
import {
  Row,
  Col,
  Select,
  Input,
  Button,
  Tabs,
  Collapse,
  Table,
  Icon,
  message,
} from 'antd';

import './style.scss';
import EditableCell from './EditableCell';

const Option = Select.Option;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

const METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

const LINK_REGEX = /http(s)?\:\/\/([\w\d.?]+(\/)?)+/;

export default class RESTool extends Component {
  constructor(props) {
    super(props);

    this.addHeaderField = this.addHeaderField.bind(this);
    this.addParam = this.params.bind(this);

    this.state = {
      method: METHODS[0],
      url: '',
      response: '',
      headers: [],
      params: [],
      cookies: [],
    };
  }

  addHeaderField() {
    this.setState({
      headers: [...this.state.headers, { name: '', value: '' }],
    });
  }

  addParam() {
    this.setState({
      params: [...this.state.params, { name: '', value: '' }],
    })
  }

  addCookis() {
    this.setState({
      cookies: [
        ...this.state.cookies,
        {
          name: '',
          value: '',
          domain: '',
          path: '/',
          expires: '',
        }],
    })
  }

  render() {
    const {
      method,
      url,
      response,
      headers,
      params,
      cookies,
    } = this.state;

    return (
      <div className="restool">
        <div className="rest-header">
          <div className="rest-url">
            <Select
              value={method}
              style={{ width: 100 }}
              onChange={(value) => {
                this.setState({
                  method: value,
                });
              }}
            >
              {METHODS.map((m, index) => 
                <Option key={index} value={m}>{m}</Option>
              )}
            </Select>
            <Input
              placeholder="URL here"
              style={{ width: 400, marginLeft: 10 }}
              value={url}
              onChange={(e) => {
                this.setState({
                  url: e.target.value,
                });
              }}
            />
          </div>
          <Button
            type="primary" icon="reload" size="large"
            onClick={this.request.bind(this)}
          >Go</Button>
        </div>
        <Row gutter={10} type="flex" style={{ height: 'calc(100% - 32px)' }}>
          <Col span={10}>
            <Tabs>
              <TabPane tab="Request" key="1">
                <Collapse bordered={false} defaultActiveKey={['1', '2', '3']}>
                  <Panel header="Headers" key="1">
                    <Table
                      style={{ marginBottom: 10 }}
                      bordered={true}
                      pagination={false}
                      dataSource={headers}
                      columns={[{
                        title: 'name',
                        dataIndex: 'name',
                        render: () => <EditableCell />
                      }, {
                        title: 'value',
                        dataIndex: 'value',
                        render: () => <EditableCell />
                      }]}
                    />
                    <Button icon="plus" onClick={this.addHeaderField} />
                  </Panel>
                  <Panel header="Request Parameters" key="2">
                    <Table
                      style={{ marginBottom: 10 }}
                      bordered={true}
                      pagination={false}
                      dataSource={params}
                      columns={[{
                        title: 'name',
                        dataIndex: 'name',
                      }, {
                        title: 'value',
                        dataIndex: 'value',
                      }]}
                    />
                    <Button icon="plus" />
                  </Panel>
                  <Panel header="Request Body" key="3">
                    <Input type="textarea" autosize={{ minRows: 5 }} />
                  </Panel>
                </Collapse>
              </TabPane>
              <TabPane tab="Cookie" key="2">
                <Table
                  bordered={true}
                  dataSource={cookies}
                  columns={[{
                    title: 'Name',
                    dataIndex: 'name',
                  }, {
                    title: 'Value',
                    dataIndex: 'value',
                  }, {
                    title: 'Domain',
                    dataIndex: 'domain',
                  }, {
                    title: 'Path',
                    dataIndex: 'path',
                  }, {
                    title: 'Expires',
                    dataIndex: 'expires',
                  }]}
                />
              </TabPane>
            </Tabs>
          </Col>
          <Col span={14}>
            <Tabs>
              <TabPane tab="Response" key="1">
                <Button
                  onClick={() => {
                    this.setState({
                      response: '',
                    });
                  }}>Clear</Button>
                <Input
                  type="textarea"
                  autosize={{ minRows: 20, maxRows: 30 }}
                  value={response}
                  style={{
                    marginTop: 20,
                  }}
                />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }

  request() {
    const {
      url,
      method,
    } = this.state;

    if (!url.length) return message.warn('URL is empty');
    if (!LINK_REGEX.test(url)) return message.warn('Not valid URL');

    message.info('Start requesting...');

    request(method, url)
      .end((err, res) => {
        message.info('Request completed.');

        let showText = '';

        switch(typeof res.body) {
          case 'string':
            showText = res.body;
            break;
          case 'object':
            showText = JSON.stringify(res.body, null, '    ');
            break;
          default:
        }

        this.setState({
          response: showText,
        });
      });
  }
}
