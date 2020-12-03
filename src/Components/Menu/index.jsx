import './index.scss'
var Menu = ({sections, setSection}) => {
    const options = sections.map(s => {
        return <button key={s} onClick={() => setSection(s)}>{s}</button>
    })
    return(
        <div className="menu-container">
            <button></button>
            <div className="menu-dropdown">
                <button onClick={() => setSection('all')}>All</button>
                {options}
            </div>
        </div>
    )
}
export default Menu