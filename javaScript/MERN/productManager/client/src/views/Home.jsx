import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from "../components/ProductForm.jsx"
import ProductList from "../components/ProductList.jsx"

const Home = (props) => {
    const [ products, setProducts ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                setProducts(res.data.products)
                setLoaded(true)
            })
            .catch(err=>{console.log("There was an error: ", err)})       
    }, [products]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm></ProductForm>
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} ></ProductList>}
        </div>
    )
}
export default Home