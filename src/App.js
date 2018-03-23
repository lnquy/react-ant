import React, {Component} from 'react';
import {LocaleProvider, Layout, Menu, Breadcrumb, message} from 'antd'
import {Steps, Icon, Button} from 'antd'
import './App.css'
const {Header, Footer, Content} = Layout
const Step = Steps.Step

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      steps: [{
        title: 'Source Version Controls',
        icon: 'user-add',
        desc: 'Add your SVC accounts',
        content: 'First-content'
      }, {
        title: 'Repositories',
        icon: 'folder',
        desc: 'Choose which repositories to be reported',
        content: 'Second-content'
      }, {
        title: 'Personal information',
        icon: 'idcard',
        desc: 'Edit your personal information',
        content: 'Last-content'
      },
      {
        title: 'Profile',
        icon: 'smile-o',
        desc: 'Your OSS profile',
        content: 'Last-content'
      }]
    }
  }

  next() {
    const current = this.state.currentStep + 1;
    this.setState({ currentStep: current });
  }
  prev() {
    const current = this.state.currentStep - 1;
    this.setState({ currentStep: current });
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
            <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
              <Steps current={this.state.currentStep} style={{ width: '80%', margin: '0 auto' }}>
                {this.state.steps.map(item => <Step key={item.title} title={item.title} description={item.desc} icon={<Icon type={item.icon}/>}/>)}
              </Steps>
              <div className="steps-content">{this.state.steps[this.state.currentStep].content}</div>
              <div className="steps-action">
                {
                  this.state.currentStep < this.state.steps.length - 1
                  &&
                  <Button type="primary" onClick={() => this.next()}>Next</Button>
                }
                {
                  this.state.currentStep === this.state.steps.length - 1
                  &&
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
                {
                  this.state.currentStep > 0
                  &&
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                }
              </div>
            </div>
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
