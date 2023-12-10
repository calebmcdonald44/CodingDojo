import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProductList = (props) => {
    const {products} = props

    return (
        <div className='flex-column'>
            <h1>All Products</h1>
            {products.map((product, i) => 
                <Link to={`/api/product/${product._id}`} key={i}>{product.title}</Link>
            )}
        </div>
    )
}
export default ProductList