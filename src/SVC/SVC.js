import React from 'react'
import {Layout, message, Button} from 'antd'
const {Content} = Layout

const svc = (props) => {
    const svcs = [
        { name: 'Github', icon: 'github' },
        { name: 'Gitlab', icon: 'gitlab' }
    ]

    const addNewSVC = (name)  => {
        switch (name.toLowerCase()) {
            case 'github':
                break;
            case 'gitlab':
                break;
            default:
                break;
        }
    }

    return (
     <Content style={{ textAlign: 'center' }}>
         Add new SVC account: 
         {
            svcs.map(svc => <Button key={svc.title} style={{ margin: '0 5px '}} icon={svc.icon} onClick={addNewSVC(svc.name)}>{svc.name}</Button>)
         }
     </Content>   
    )
}

export default svc;