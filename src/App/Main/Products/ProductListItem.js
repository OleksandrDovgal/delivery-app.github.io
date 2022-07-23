import React, { Component } from "react"
import PropTypes from 'prop-types'
import './ProductListItem.css'
import Quantity from "../../../Components/Quantity/Quantity"

class ProductListItem extends Component {

    state = {
        productCount:1,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1
        }))
    }

    render() {
        const {
            id,
            name,
            type,
            price,
            image,
            addProductToCart 
        } = this.props;
        return(
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="product-title">{name}</div>
                <div className="product-title">{type}</div>
               <Quantity
                    productCount={this.state.productCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
               />
                <div className="product-price">$ {price}</div>
                <button 
                    onClick={() => addProductToCart(id,this.state.productCount)}
                    className="btn-add-to-cart">Add to cart</button>
            </div> 
        )
    }
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}

ProductListItem.defaultProps = {
    type:"No type... "
}

export default ProductListItem