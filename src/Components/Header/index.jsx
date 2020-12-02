import './index.scss'
var Header = ({sections, section, setSection}) => {
    return (
        <header>
            <span>{section}</span>
            <Menu sections={sections} setSection={setSection}/>
        </header>
    )
}
export default Header