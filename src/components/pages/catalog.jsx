import "./catalog.css"
import {useEffect, useState} from "react";
import Product from '../products';
import DataService from "../../services/dataservice";

function Catalog () {
    const [products, setProducts] = useState([]);
    //when the component loads we use "useEffect():" receives two parameters : arrow function and list of dependencies

    useEffect(() => {
        console.log("catalog loaded");
        let service = new DataService();
        let productList = service.getCatalog();
        setProducts(productList);
        console.log(productList);
        }, []);

    return (
        <div className="catalog">
            
                <h3>Show off your style, with {products.length} new arrivals for you!</h3>


            <div className="products">
                {/* { products.map( product => <Product title={product.title}/>)} */}
                { products.map( product => <Product data={product}/>)}
            </div>
        </div>
    );
}

export default Catalog;