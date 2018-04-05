import React, {Component} from 'react';
import {LocaleProvider, Layout, Menu, message} from 'antd'
import {Steps, Icon, Button, Divider} from 'antd'
import SVC from './SVC/SVC'
import Repos from '../components/Repos/Repos'
import Personal from '../components/Personal/Personal'
import Profile from '../components/Profile/Profile'
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
        desc: 'Add your SVC accounts'
      }, {
        title: 'Repositories',
        icon: 'folder',
        desc: 'Choose repos to be reported'
      }, {
        title: 'Personal information',
        icon: 'idcard',
        desc: 'Edit your personal information'
      },
      {
        title: 'Profile',
        icon: 'smile-o',
        desc: 'Your OSS profile'
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

  switchStepContent() {
    switch (this.state.currentStep) {
      case 0:
        return <SVC/>
      case 1:
        return <Repos/>
      case 2:
        return <Personal/>
      case 3:
        return <Profile/>
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

          <div style={{ padding: 16 }}>
            <Steps size="small" current={this.state.currentStepv} style={{ width: '60%', margin: '0 auto', padding: '10px 0'}}>
              {this.state.steps.map(item => <Step className='svc-step' key={item.title} title={item.title} description={item.desc} icon={<Icon type={item.icon}/>}/>)}
            </Steps>
          </div>
          <Content style={{ position: 'relative', backgroundColor: 'white', margin: '0 24px',  padding: '24px', paddingBottom: 0, minHeight: 500 }}>
            <div className="steps-content">
              {this.switchStepContent()}

              <div className="steps-action" style={{ position: 'absolute', right: 16, bottom: 16 }}>
              {
                this.state.currentStep > 0
                &&
                <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              }
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
