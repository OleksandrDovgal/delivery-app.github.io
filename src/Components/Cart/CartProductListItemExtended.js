import React from 'react'
import Quantity from '../Quantity/Quantity'
import './CartProductListItemExtended.css'


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductCount
}) => (
    <div className="cart-product-list-item-description">
        <div className="row">
            <div className="col-lg-3">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {product.name} </span>
                </p>
                <p className="cart-extended-price">
                    Price for one item: <span className="bold">$ {product.price} </span>
                </p>
                <p className="cart-extended-count">
                    Selected quantity: <span className="bold"> {productCount} </span>
                </p>
                <p className="cart-extended-sum">
                    Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span>
                </p>
               <Quantity
                    productCount={productCount}
                    onIncrementClick={() => changeProductCount(product.id,productCount+1)}
                    onDecrementClick={() => changeProductCount(product.id,productCount-1)}
               />
                <button onClick={() => removeProductFromCart(product.id)}>Remove Product </button>
            </div>
        </div>
    </div>
)

export default CartProductListItemExtended

