import './index.scss'
import Item from '../Item'
import Stats from '../Stats'
import {useContext, useEffect, useState} from 'react'
import { InventoryContext } from '../../Contexts/InventoryContext'
import { ItemsContext } from '../../Contexts/ItemsContext'
var Inventory = () => {
    const {inventory, dispatch} = useContext(InventoryContext)
    const {items} = useContext(ItemsContext)
    const inventorySet = () => {
        let inventorySet = new Set()
        inventory.forEach(i => {
            inventorySet.add(i)
        }   );
        return inventorySet
    }
    const inventoryItems = () => {
        return items.filter(item => inventorySet().has(item.id))
    }
    const itemsEquipped = () => {
        return inventoryItems().map(i => {
                return <Item item={i} key={i.id} />
        })
    }
    return (
        <div className="inventory-container">
            <div className="inventory-bar">
                <span>Inventory</span>
                <button>Open</button>
            </div>
            {
                inventory.length ? (
                    <div className="inventory-hidden">
                        <Stats items={inventoryItems()} />
                    <div className="items-equipped">
                        {itemsEquipped()}
                    </div>
                </div>   
                ) : 'There are no items here...'
            }
            
        </div>
    )
}
export default Inventory