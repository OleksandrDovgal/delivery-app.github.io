import React from "react"
import ProductListItem from "./ProductListItem"
import products from "./products"

const ProductList = ({
    addProductToCart
}) => {
    return(
        <>
            <h1 className="page-title">Product List</h1>
            <div className="row">
                {
                    products.map(({
                        id,
                        name,
                        type,
                        price,
                        image
                    }) => (
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                type={type}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
} 
export default ProductList