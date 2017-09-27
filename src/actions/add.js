export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';


export function addItem(item) {
    return {
        type : ADD_ITEM,
        item                                // this is same as newItem : newItem in ES6
    }
}

export function removeItem(removeItem) {
    return {
        type : REMOVE_ITEM,
        removeItem
    }
}