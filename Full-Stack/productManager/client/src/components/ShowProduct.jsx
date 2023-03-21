import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowProduct = (props) => {

    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setOneProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="col-md-6 offset-2">
            <h3>{oneProduct.title}</h3>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    )
}

export default ShowProduct;