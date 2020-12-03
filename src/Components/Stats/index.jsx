import './index.scss'
import Stat from '../Stat'
const Stats = ({items}) => {
    const stats = {def: 0, str: 0, dex: 0, int: 0}
        items.forEach(item => {
            item.stats.forEach(stat => stats[stat.property] += stat.value)
        })
    const statsList = () => {
        return Object.entries(stats).map(([stat, value]) => <Stat key={stat.stat} stat={{stat, value}} />)
    }
        return (
            <div className="stats-container">
                {statsList()}
            </div>
        )
}
export default Stats