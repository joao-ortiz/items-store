export const inventoryReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            console.log(action.item);
            return [
                ...state,
                action.item.id
            ]
        case 'REMOVE_ITEM':
            return state.filter(i => i!== action.item.id)
        default:
            return state
    }
}