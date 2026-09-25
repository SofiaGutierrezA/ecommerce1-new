import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar({ cart}) {
    return (
        <nav className="navbar">
            <h2 className="navbar-title">Soleva</h2>

            <ul className="navbar-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/account"> <FontAwesomeIcon icon={faUser} /></Link></li>
                <li className="menu-actions">
                    <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                         ({cart.length})
                    </Link>

                </li>
            </ul>

                

        </nav>
        
    )
}

export default Navbar;