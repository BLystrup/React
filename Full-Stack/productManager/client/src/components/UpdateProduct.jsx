import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/api/products");
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h3>Update Product</h3>
            <form action="" className="col-md-6 offset-2" onSubmit={updateProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className='form-control' name='title' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className='form-control' name='price' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Description:</label>
                    <input type="text" className='form-control' name='description' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <button className="btn btn-primary mt-3">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct