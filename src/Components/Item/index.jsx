import './index.scss'
import { useContext} from 'react'
import { InventoryContext } from '../../Contexts/InventoryContext'
var Item = ({item}) => {
    const {dispatch} = useContext(InventoryContext)
    const itemAttributes = () => {
        return item.stats.map(stat => {
            return <span>{stat.propriety}: {stat.value}</span>
        })
    }
    return (
        <div className="item-container">
            <div className="image-container">
                <img src={require(`../../assets/${item.img}.png`).default} alt=""/>
            </div>
            <div className="item-info">
                <p className="item-name">{item.name}</p>
                { itemAttributes }
            </div>
            <button onClick={() => dispatch({action:'ADD_ITEM', item})} className="add-item">+</button>
        </div>
    )
}