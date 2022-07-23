import React from "react"
import { keys } from "lodash"
import products, { getProductsObject } from "../../App/Main/Products/products"
import CartProductListItem from "./CartProductListItem"

const CartProductList = ({
    productsInCart,
    productsObject=getProductsObject(products),
    CartItem=CartProductListItem,
    removeProductFromCart,
    changeProductCount
}) => {
    return(
        <div>
            {
                keys(productsInCart).map(id => (
                    <CartItem
                        key={id}
                        product= {productsObject[id]}
                        productCount={productsInCart[id]}
                        removeProductFromCart={removeProductFromCart}
                        changeProductCount={changeProductCount}
                    />
                ))
            }
        </div>
    )
}

export default CartProductList