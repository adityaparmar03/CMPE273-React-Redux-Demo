export const  addqty = function(item)
{
    console.log("add is started . . .");
    return{
        type:"Qty_inc",
        payload: item
    }
};