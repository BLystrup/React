import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ShowProduct from './components/ShowProduct';
import UpdateProduct from './components/UpdateProduct';
// import ProductForm from './components/ProductForm';
// import ProductList from './components/ProductList';

function App() {

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="api/products" default />
        <Route element={<ShowProduct/>} path="api/products/:id"/>
        <Route element={<UpdateProduct/>} path="api/products/edit/:id"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
