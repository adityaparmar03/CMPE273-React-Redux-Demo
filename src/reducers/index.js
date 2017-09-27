import {combineReducers} from 'redux'
import items from './items'

const allreducer = combineReducers({
    items:items
})

export default allreducer;