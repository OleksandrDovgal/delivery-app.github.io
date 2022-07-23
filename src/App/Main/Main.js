import React from "react"
import { Route, Routes } from "react-router-dom"
import CartPage from "./CartPage/CartPage"
import ProductList from "./Products/ProductList"

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductCount
}) => {
    return(
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Routes>
                            <Route path="/" index element={<ProductList 
                                addProductToCart={addProductToCart}
                            />}/>
                            <Route path="cart" element={<CartPage 
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductCount={changeProductCount}
                            />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main