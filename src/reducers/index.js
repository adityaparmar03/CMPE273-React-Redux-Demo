import {combineReducers} from 'redux'
import items from './items'


const allreducer = combineReducers({
    items:items,
    act:act
})

export default allreducer;