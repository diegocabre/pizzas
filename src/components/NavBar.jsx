import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const setActive = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    return (
        <nav>
            <NavLink to="/" style={setActive}><img className="homeImg" src="" alt="" /> Home</NavLink>
            <NavLink to="/cart" style={setActive}><img className="carritoImg" src="../assets/img/carrito.png" alt="" /> Carrito</NavLink>
        </nav>
    )
}