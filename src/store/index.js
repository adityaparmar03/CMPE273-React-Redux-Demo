import React, {Component} from 'react';
import {createStore} from 'redux';
import allreducer from './reducer/index'

const store = createStore(allreducer)
class store extends Component {
}
export default store;