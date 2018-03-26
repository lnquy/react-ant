import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import 'moment/locale/vi';
import 'antd/dist/antd.css'
// import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import reducer from '../store/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

// moment.locale('vi');

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
