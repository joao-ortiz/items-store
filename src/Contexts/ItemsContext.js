import {createContext, useState} from 'react'

export var ItemsContext = createContext()

var ItemsContextProvider = (props) =>{
    var initialItems
    var [items, setItems] = useState(initialItems)

    return <ItemsContext.Provider value={{items}}>
        {props.children}
    </ItemsContext.Provider>
}

export default ItemsContextProvider