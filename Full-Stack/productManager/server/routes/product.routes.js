const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products', ProductController.createOneProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put('/api/products/:id', ProductController.updateOneProduct);
    app.delete('/api/products/:id', ProductController.deleteOneProduct)
}