import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const ProductForm = (props) => {

    const { productList, setProductList } = props;

    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })


    const onChangeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const formValidator = () => {
        let isValid = true;
        if (product.title.length < 3) {
            return false
        }
        else if (product.price.value < 1) {
            return false
        }
        else if (product.description.length < 5) {
            return false
        }
        return isValid
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/products', product)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setProductList([...productList, res.data]);
                    setProduct({});
                })
                .catch(err => console.log(err))
        }
    }


    return(
        <div>
            <h3 className="col-md-6 offset-2">Prodct Manager</h3>
            <form action="" className="col-md-6 offset-2" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className='form-control' name='title' id='title' onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className='form-control' name='price' id='price' onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Description:</label>
                    <input type="text" className='form-control' name='description' id='description' onChange={onChangeHandler}/>
                </div>
                <button className="btn btn-primary mt-3">Create</button>
            </form>
        </div>
    )
}

export default ProductForm