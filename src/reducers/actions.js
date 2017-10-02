import {combineReducers} from 'redux'

export const add = (state=[],action)=>{
    
    if(action.type === "ADD_ITEM"){
        
        console.log("act.js=>"+JSON.stringify(state)+"action"+action.payload);
        return[
            ...state,
            {"id":4,"name":"rr","price":12,"qty":0}
        ]
    }
    return state;
}




export default combineReducers({
    
    //add:add
    

});