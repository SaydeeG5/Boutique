import "./products.css";
import QuantityPicker from './quantity';

function Product () {
    return (
        <div className="product">
            <img src="https://picsum.photos/200/200"alt="greenJacket"></img>
            <h5>BRIGHT GREEN PACK FLAP POCKET BOXY BLAZER</h5>
            <p>$29.99</p>
            <QuantityPicker/>
            <button>Add</button>
        </div>
    )
}

export default Product;