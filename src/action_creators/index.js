
export function Add(item) {
   
    
    item.qty = item.qty+1;

    return {
        type : "OP",
        payload : item                                // this is same as newItem : newItem in ES6
    }
}


export function Remove(item) {
    
  
     item.qty = item.qty - 1;
 
     return {
         type : "OP",
         payload : item                                // this is same as newItem : newItem in ES6
     }
 }