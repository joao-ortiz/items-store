import './index.scss'
var Stat = ({stat}) => {
    return (
        <div className="stat-container">
            <div className="stat-bar">{stat.stat}: {stat.value}</div>
        </div>
    )
}
export default Stat