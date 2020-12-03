import {createContext, useState} from 'react'
import {initialItems} from '../utlis/items'
export var ItemsContext = createContext()

var ItemsContextProvider = (props) =>{
    var [items, setItems] = useState(initialItems)

    return <ItemsContext.Provider value={{items}}>
        {props.children}
    </ItemsContext.Provider>
}

export default ItemsContextProvider