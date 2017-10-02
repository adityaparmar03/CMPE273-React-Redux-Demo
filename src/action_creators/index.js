
export function Operation(item,i) {
   
    if(item.qty>0 || i===1)
    item.qty = item.qty + i;

    return {
        type : "OP",
        payload : item                                // this is same as newItem : newItem in ES6
    }
}


 