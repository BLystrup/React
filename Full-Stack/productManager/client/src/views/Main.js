import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";


const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return(
        <div>
            <ProductForm productList={productList} setProductList={setProductList}/>
            <ProductList productList={productList} setProductList={setProductList}/>
        </div>
    )
}

export default Main;