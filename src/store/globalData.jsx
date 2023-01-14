import DataContext from "./dataContext";
import { useState } from "react";

function GlobalData (props) {
    const [cart, setCart]= useState([]);
    const [fakeUser, setFakeUser]= useState({name:"Saydee"});

    function addProductToCart(product){

        // modify an state varibale with ofject {} or array []
        
        // create a copy
        let copy = [...cart];
        //modify the copy
        copy.push(product);
        //set the copy (replace the old one with the copy)
        setCart(copy);

    }


    function removeProductFromCart(){}


    
    return (
        <DataContext.Provider
        value={{
            cart: cart,
            user: fakeUser,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
    }}
    >
        {props.children}
        </DataContext.Provider>
    );
}

export default GlobalData;