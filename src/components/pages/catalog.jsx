import "./catalog.css"
import Product from '../products';

function Catalog () {
    return (
        <div className="catalog">
            <h3>Check our amazing products!</h3>
        <Product />
        <Product />
        <Product />

            
        </div>
    );
}

export default Catalog;