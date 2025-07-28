import { Link, useLocation } from "react-router-dom"
import './Navbar.css'

function NavBar() {
    const location = useLocation()
    
    return(
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-icon">📄</span>
                    ResumeGen
                </Link>
                <div className="nav-menu">
                    <Link 
                        to="/home" 
                        className={`nav-link ${location.pathname === '/home' || location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/edit" 
                        className={`nav-link ${location.pathname === '/edit' ? 'active' : ''}`}
                    >
                        Edit Resume
                    </Link>
                    <Link 
                        to="/preview" 
                        className={`nav-link ${location.pathname === '/preview' ? 'active' : ''}`}
                    >
                        Preview
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar