import {combineReducers} from 'redux'
import items from './items'
import act from './act'

const allreducer = combineReducers({
    items:items,
    act:act
})

export default allreducer;