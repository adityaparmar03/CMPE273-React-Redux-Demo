import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import fetchMenu from '../api/index'


const middlewares = applyMiddleware(logger,thunk);
const store = createStore(reducers,middlewares);


  


store.dispatch(fetchMenu());

export default store