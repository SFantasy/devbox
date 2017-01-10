import React, { Component } from 'react';
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

const Option = Select.Option;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

const METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

export default class RESTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      method: METHODS[0],
    };
  }

  render() {
    const {
      method,
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
            <Input placeholder="URL here" style={{ width: 400, marginLeft: 10 }} />
          </div>
          <Button type="primary" icon="reload" size="large">Go</Button>
        </div>
        <Row gutter={10}>
          <Col span={10}>
            <Tabs>
              <TabPane tab="Request" key="1">
                <Collapse bordered={false} defaultActiveKey={['1', '2', '3']}>
                  <Panel header="Headers" key="1">
                    <Table
                      bordered={true}
                      columns={[{
                        title: 'name',
                      }, {
                        title: 'value',
                      }]}
                    />
                  </Panel>
                  <Panel header="Request Parameters" key="2">
                    <Table
                      bordered={true}
                      columns={[{
                        title: 'name',
                      }, {
                        title: 'value',
                      }]}
                    />
                  </Panel>
                  <Panel header="Request Body" key="3">
                    <Input type="textarea" />
                  </Panel>
                </Collapse>
              </TabPane>
              <TabPane tab="Cookie" key="2">
                <Table
                  bordered={true}
                  columns={[{
                    title: 'Name',
                  }, {
                    title: 'Value',
                  }, {
                    title: 'Domain',
                  }, {
                    title: 'Path',
                  }, {
                    title: 'Expires',
                  }]}
                />
              </TabPane>
            </Tabs>
          </Col>
          <Col span={14}>
            <Tabs>
              <TabPane tab="Response" key="1">
                <Input type="textarea" style={{ height: '100%' }} />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}
