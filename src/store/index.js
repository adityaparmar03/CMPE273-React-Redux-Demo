
import {createStore} from 'redux';
import reducers from '../reducers/actions'
import intialstate from '../reducers/intialstate.json'


const store = createStore(reducers,intialstate);





export default store;