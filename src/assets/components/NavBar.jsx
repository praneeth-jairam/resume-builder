import { Link } from "react-router-dom"
import './Navbar.css'
function NavBar()
{
    return(
        <div className="container">
            <h1 className="logo">ResumeGen</h1>
            <div className="navlinks">
                <Link to={"/home"}>Home</Link>
                <Link to={"/edit"}>Edit Resume</Link>
                <Link to={"/preview"}>Preview</Link>
            </div>
       </div>
    )
}
export default NavBar;