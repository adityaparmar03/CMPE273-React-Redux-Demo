import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import allreducer from './reducers'

const store = createStore(allreducer)

ReactDOM.render(
    <Provider>
        <App/>
     </Provider>,
     document.getElementById('root'));
