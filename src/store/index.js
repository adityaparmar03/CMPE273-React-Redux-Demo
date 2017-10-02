
import {createStore} from 'redux';

import reducers from '../reducers/actions'
import intialstate from '../reducers/intialstate.json'


const store = createStore(reducers,intialstate);
console.log('state=>'+(store.getState()));
store.dispatch({
    type:"ADD_ITEM",
    payload:"I am calling ..."
});

console.log('newstate'+(store.getState()));

export default store;