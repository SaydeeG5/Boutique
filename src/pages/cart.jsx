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
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <img src={"/images/"+product.image} alt=""></img>
                            </div>
                        <div class="col-sm">
                            <h6 className="productTitle">{product.title}</h6>
                        </div>
                        <div class="col-sm">
                            <label>{product.price}</label>
                        </div>
                        <div class="col-sm">
                            <button type="button" class="btn btn-info">Delete</button>
                        </div>
                    </div>
                </div>

                    
                </div>)
                )
            }
            </div>
        </div>
    );
}

export default Cart;