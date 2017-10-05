import {createStore} from 'redux';

import reducers from '../reducers/actions'
//import initialstate from '../reducers/initialstate.json'

const initialstate = {
    food: [
                       {"id":1,"name":"burger","price":5,"qty":0},
                       {"id":2,"name":"pasta","price":8,"qty":0},
                       {"id":3,"name":"pizza","price":12,"qty":0}
                      ]
   }
const store = createStore(reducers,initialstate);
export default store;