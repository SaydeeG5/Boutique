import "./navBar.css";
function NavBar() {
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/home">Boutique</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/catalog">Catalog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cart">Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    
</nav>
        
        
    );
}

export default NavBar; 