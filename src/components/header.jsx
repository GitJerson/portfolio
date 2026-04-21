import '../header.css'
function Header() {
    return (
        <nav className="realm-nav fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-10 backdrop-blur-sm" id="realm-nav">
            <span className="nav-logo">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    Jerson Jr. M Vargas
                </a>
            </span>
            <ul className="nav-links flex gap-8 list-none">
                <li><a href="#origin">Origin</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Header