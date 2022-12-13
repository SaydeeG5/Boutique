import "./products.css";
import QuantityPicker from './quantity';
import {useState} from "react";

function Product (props) { 
    const [quantity, setQuantity] = useState(1);
        
    function handleQtyChange(qty) {
        console.log ("quantity changed", qty);
        setQuantity(qty);
    }
    return (
        <div className="product">
            {/* <img src="https://picsum.photos/200/200"alt=""></img> */}
            <img src={"/images/"+props.data.image} alt=""></img>

            {/* <h5>{props.title}</h5> */}
            <h5>{props.data.title}</h5>

            {/* <p>$29.99</p> */}
            <div className="priceTotal">
            <label>Price: ${props.data.price.toFixed(2)}</label>
            <label>Total: ${props.data.price* quantity}</label>
            </div>

            <QuantityPicker onChange={handleQtyChange}/>
            <button>Add</button>
        </div>
    )
}

export default Product;