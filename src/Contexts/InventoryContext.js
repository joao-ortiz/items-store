import {createContext, useReducer} from 'react'
import InventoryReducer from '../Reducers/InventoryReducer'

export const InventoryContext = createContext()

var InventoryContextProvider = (props) => {
    const [inventory, dispatch] = useReducer(InventoryReducer)

    return <InventoryReducer.Provider value={{inventory, dispatch}} >
        {props.children}
    </InventoryReducer.Provider>
}

export default InventoryContextProvider
