import React, {Component} from 'react'
import {Layout, message, Button} from 'antd'
import './svc.css'
const {Content} = Layout

class SVC extends Component {
    svcs = [
        { name: 'Github', icon: 'github' },
        { name: 'Gitlab', icon: 'gitlab' }
    ]

    addNewSVC = (name)  => {
        switch (name.toLowerCase()) {
            case 'github':
                break;
            case 'gitlab':
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Content>
                Add new SVC account: 
                {
                   this.svcs.map(svc => <Button key={svc.title} style={{ margin: '0 5px '}} icon={svc.icon} onClick={this.addNewSVC(svc.name)}>{svc.name}</Button>)
                }
            </Content>   
        )
    }
}

export default SVC;