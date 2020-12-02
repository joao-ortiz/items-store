import './index.scss'
import Filter from '../Filter'
import {useContext, useState} from 'react'
import { ItemsContext } from '../../Contexts/ItemsContext'
import Item from '../Item'
var ItemSection = (props) => {
    const [filters, setFilters] = useState([])
    const items = useContext(ItemsContext)
    const itemsList = () => {
        let itemsList = items
        if (props.section !== 'all') {
            itemsList = items.filter(i => {
                return i.section.name === props.section
            })
        }
        {
            if(filters.length) {
                let filtersSet = {}
                filters.forEach(f => filtersSet[f] = true)
                itemsList.filter(i =>{
                    return filtersSet.has(...i.categories)
                })
            }
        }
        return itemsList.map(item => {
            return <Item key={item.id} item={item} />
        })
    }
    return(
        <div className="items-section">
            <Filter options={filters} setFilters={setFilters} />
            <div className="list">
                {itemsList}
            </div>
        </div>
    )
}
export default ItemSection