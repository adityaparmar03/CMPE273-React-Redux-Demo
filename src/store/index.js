
import {createStore} from 'redux';

import reducers from '../reducers/actions'
import initialstate from '../reducers/initialstate.json'


const store = createStore(reducers,initialstate);

store.dispatch({
    type:"LOAD",
    payload:""
});



export default store;