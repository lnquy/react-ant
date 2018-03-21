import React, {Component} from 'react';
import {LocaleProvider, Layout, Menu, Breadcrumb} from 'antd'
import './App.css';
const {Header, Footer, Content} = Layout

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <LocaleProvider>
        <Layout className="layout">
          <Header style={{ backgroundColor: 'white' }}>
            <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Pages</Menu.Item>
              <Menu.Item key="3">About</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Argus ©2018 Created by lnquy
          </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default App;
