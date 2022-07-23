import React from "react";
import './cart.css'
import CartTotal from "../../../Components/Cart/CartTotal";
import CartProductList from "../../../Components/Cart/CartProductList";

const Cart = ({
    productsInCart
}) => {
    console.log(productsInCart)
    return(
        <div className="cart text-center">
            <CartProductList
                productsInCart={productsInCart}
            />
            <CartTotal
                productsInCart={productsInCart}
            /> 
        </div>
    )
} 

export default Cart