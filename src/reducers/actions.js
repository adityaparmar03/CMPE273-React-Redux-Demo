import {combineReducers} from 'redux'

const add = (state,action)=>{
    
    if(action.type === "ADD_ITEM"){
        console.log("act.js=>");
    }
    return state;
}


const reducers = combineReducers({
    
    //add : add
    

})

export default reducers;