import { Link } from "react-router-dom";
import { RxDragHandleHorizontal } from "react-icons/rx";
import './index.css'

const Header = ()=>{
    return(
        <nav className="nav-container">
            <h1 className="app-logo">wylogram</h1>
            <div className="toggle-container">
                <ul className="nav-list-container">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create-post" className="nav-link">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header