import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProductList = (props) => {
    const {products, removeFromDom } = props
    
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='flex-column'>
            <h1>All Products</h1>
            {products.map((product, i) => 
            <div key={i} className='flex'>
                <Link to={`/api/product/${product._id}`}>{product.title}</Link>
                <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
            </div>
            )}
        </div>
    )
}
export default ProductList