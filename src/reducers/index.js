import {combineReducers} from 'redux'
import items from './item'

const allreducer = combineReducers({
    items:items
})

export default allreducer;