export function Load(data) {
    return {
      type: 'LOAD',
      payload:data
    }
}

export function Add(item) {
   
     return {
        type : "ADD",
        payload : item                                // this is same as newItem : newItem in ES6
    }
}


export function Remove(item) {
    
  

 
     return {
         type : "REMOVE",
         payload : item                                // this is same as newItem : newItem in ES6
     }
 }