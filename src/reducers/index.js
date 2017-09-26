import {combineReducer} from 'redux'
import items from './item'

const allreducer = combineReducer({
    items:items
})