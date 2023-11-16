import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const setActive = ({ isActive }) => isActive ? "active" : "";
    return (
        <nav className="nav">
            <NavLink to="/" className={setActive}><i class="fa-solid fa-pizza-slice"></i> Pizzería Mamma Mia!</NavLink>
            <NavLink to="/carrito" className={setActive}><i class="fa-solid fa-cart-shopping"></i> Carrito</NavLink>
        </nav>
    );
}

export default NavBar