import "./navBar.css";
import {useContext} from "react";
import DataContext from "../store/dataContext";
import {Link} from "react-router-dom";

function NavBar() {
    const cart = useContext(DataContext).cart;

    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Boutique</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/catalog">Catalog</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <form className="d-flex" role="cart">
            <Link to="/cart">
            <span class="badge badge-pill badge-info"> {cart.length}</span>
            <button type="button" class="btn btn-info">Cart</button>
            </Link>
            </form>
        </div>
    
</nav>
        
        
    );
}

export default NavBar; 