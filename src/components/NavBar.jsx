import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    const setActive = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    return (
        <nav className="nav">
            <NavLink to="/" style={setActive}><img className="homeImg" src="" alt="" /> Home</NavLink>
            <NavLink to="/cart" style={setActive}><img className="carritoImg" src="" alt="" /><i className="fa-solid fa-cart-shopping"></i></NavLink>
        </nav>
    )
}