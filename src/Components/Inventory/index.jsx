import './index.scss'
import Item from '../Item'
import Stat from '../Stat'
import {useContext} from 'react'
import { InventoryContext } from '../../Contexts/InventoryContext'
import { ItemsContext } from '../../Contexts/ItemsContext'
var Inventory = () => {
    const {inventory} = useContext(InventoryContext)
    const {items} = useContext(ItemsContext)
    const itemsEquipped
    {
        let inventorySet
        inventory.array.forEach(i => {
                inventorySet[i] = true
        });
        itemsEquipped = items.map(i => {
            if(inventorySet[i]) {
                return <Item item={i} key={i.id} />
            }
        })
    }
    const stats = {def: 0, str: 0, dex: 0, int: 0}
    return (
        <div className="inventory-container">
            <div className="status-container"></div>
            <div className="items-equipped">
                {itemsEquipped.length ? itemsEquipped : 'There are no items here...'}
            </div>
        </div>
    )
}
export default Inventory