import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store/index'

ReactDOM.render(
    <Provider store={store}>
        <Router>
         <Route path="/" component={App} />
     </Router>
     </Provider>,
     document.getElementById('root'));
