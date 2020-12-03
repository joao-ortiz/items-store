import {createContext, useReducer} from 'react'
import {inventoryReducer} from '../Reducers/InventoryReducer'

export const InventoryContext = createContext()

var InventoryContextProvider = (props) => {
    const [inventory, dispatch] = useReducer(inventoryReducer, [])
    return <InventoryContext.Provider value={{inventory, dispatch}} >
        {props.children}
    </InventoryContext.Provider>
}

export default InventoryContextProvider
