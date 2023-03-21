import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {

    const {productList, setProductList} = props;
    console.log(productList);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data.products);
                setProductList(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="col-md-6 offset-2 mt-3">
            <h2>All Products:</h2>
            {
                productList.map((product, i) => {
                    return(
                    <div key={i}>
                        <Link to={`/api/products/${product._id}`}>{ product.title }</Link>
                    </div> 
                    )
                })
            }
        </div>
    )
}

export default ProductList;