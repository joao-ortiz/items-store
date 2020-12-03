import './index.scss'
var Filter = (props) => {
    const options = props.options.forEach(o => {
        return <button key={o} onClick={() => props.handleFilter(o)}>{o}</button>
    })
    return (
        <div className="filter">
            <span>Filters</span>
            {options}
        </div>
    )
}
export default Filter