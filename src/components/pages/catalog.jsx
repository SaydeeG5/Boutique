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
            <img src="https://media.giphy.com/media/jMYOXcimgnTxOeseD0/giphy.gif"alt="Sparkling Christmas Tree"></img><br/>
            <h3>Shine bright this season, </h3>
            <h5>with {products.length} new arrivals for you! </h5>

            <div className="products">
                {/* { products.map( product => <Product title={product.title}/>)} */}
                { products.map( product => <Product data={product}/>)}
            </div>
        </div>
    );
}

export default Catalog;