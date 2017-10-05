import {combineReducers} from 'redux'

var initalstate ={
    food : [],
    cool:""
}
export const food = (state=initalstate,action)=>{
    
    if(action.type === "LOAD"){
        return{
            ...state,
            food:action.payload,
            cool:"ADITYA"
        }
    }
    
    if(action.type === "ADD"){
         console.log("op=>"+JSON.stringify(state))
       
        return{
           ...state,
           food : state.food.map(function(item,i){
                if(item.id === action.payload.id){
                    item.qty = item.qty + 1;
                }
                return item;   
               
           })
          }
      }
      if(action.type === "REMOVE"){
        console.log("op=>"+JSON.stringify(state))
      
       return{
          ...state,
          food : state.food.map(function(item,i){
               if(item.id === action.payload.id){
                   item.qty = item.qty - 1;
               }
               return item;   
              
          })
         }
     }
    
    return state;
}




export default combineReducers({
    
    food
    

});