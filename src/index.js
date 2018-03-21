import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import 'moment/locale/vi';
import 'antd/dist/antd.css'
// import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// moment.locale('vi');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
