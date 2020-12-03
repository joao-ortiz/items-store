import './index.scss'
import Filter from '../Filter'
import {useContext, useState} from 'react'
import { ItemsContext } from '../../Contexts/ItemsContext'
import Item from '../Item'
var ItemSection = (props) => {
    const [filters, setFilters] = useState([])
    const {items} = useContext(ItemsContext)
    let filterOptions = new Set()
    const itemsList = () => {
        let itemsList = items
        if (props.section !== 'all') {
            itemsList = items.filter(i => {
                return i.section === props.section.toLowerCase()
            })
        }
            if(filters.length) {
                let filtersSet = new Set()
                filters.forEach(f => filtersSet.add(f))
                itemsList = itemsList.filter(i =>{
                    return filtersSet.has(...i.categories)
                })
            }
        return itemsList.map(item => {
            filterOptions.add(item.categories)
            return <Item key={item.id} item={item} />
        })
    }
    return(
        <div className="items-section">
            <Filter options={filterOptions} setFilters={setFilters} />
            <div className="list">
                {itemsList()}
            </div>
        </div>
    )
}
export default ItemSection