export default function(state=[],action){
    switch(action.type){
        case "ADD_ITEM":
         
            console.log("hi"+action.item.qty);
            return[
                ...state,
                {
                  qty:action.item.qty + 1
                 
                }
            ] 
         
            break;   
    }
    return state;
}