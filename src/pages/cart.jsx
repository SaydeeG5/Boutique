import "./cart.css";
import {useContext} from "react";
import DataContext from "../store/dataContext";

function Cart() {
    const cart = useContext(DataContext).cart;

    return (
        <div className="cart">
            <h1>You have great style! </h1>
            <h3> You have {cart.length} in the cart.</h3>
            <p>Please review your order and proceed to checkout. </p>

            <div className="cartInfo">
                {cart.map(product=>
                (<div>
                    <img src={"/images/"+product.image} alt=""></img>

                    <h6>{product.title}</h6>

                    <label>{product.price}</label>
                    <br />

                    <button type="button" class="btn btn-info">Delete</button>
                    
                </div>)
                )
            }
            </div>
        </div>
    );
}

export default Cart;