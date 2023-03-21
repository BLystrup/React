import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ShowProduct = (props) => {

    const {id} = useParams();
    const [ oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setOneProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res);
                navigate("/api/products");
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="col-md-6 offset-2">
            <h3>{oneProduct.title}</h3>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button className="btn btn-danger mt-1" onClick={(e) => {deleteProduct(oneProduct._id)}}>Delete Product</button>
        </div>
    )
}

export default ShowProduct;