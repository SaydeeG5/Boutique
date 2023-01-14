import "./products.css";
import QuantityPicker from './quantity';
import {useState,useContext} from "react";
import DataContext from "../store/dataContext";

function Product (props) { 
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart;
        
    function handleQtyChange(qty) {
        console.log ("quantity changed", qty);
        setQuantity(qty);
    }

    function addToCart() {
        console.log ("add to cart",props.data);
        addProductToCart(props.data); // call the global function  
    }
    
    return (
        <div className="product">

            <img src={"/images/"+props.data.image} alt=""></img>

            
            <h5>{props.data.title}</h5>

            
            <div className="priceTotal">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${(props.data.price* quantity).toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={handleQtyChange}/>
            <button onClick={addToCart}>Add</button>
        </div>
    )
}

export default Product;