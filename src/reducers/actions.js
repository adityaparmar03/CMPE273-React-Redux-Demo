import {combineReducers} from 'redux'

export const food = (state=[],action)=>{
      if(action.type === "OP"){
        return(
                 state.map(item => {
                        return item.id === action.payload.id ? action.payload : item;
                    }) 
               
            )
            
    }
    
    return state;
}




export default combineReducers({
    
    food:food
    

});