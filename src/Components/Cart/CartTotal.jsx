import React from "react";
import { keys } from "lodash";
import products, { getProductsObject } from "../../App/Main/Products/products";

const CartTotal = ({
    productsInCart,
    productsObject=getProductsObject(products)
}) => {
    return(
        <div>
            Total: {
                keys(productsInCart).reduce((total, id) => (
                    total + (productsInCart[id]) * (productsObject[id].price)
                ), 0)
            } $
        </div> 
    )
}

export default CartTotal