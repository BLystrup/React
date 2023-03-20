const Product = require('../models/product.model');

// Find all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Create one product
module.exports.createOneProduct = (req, res) => {
    Product.create( req.body )
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Find on product
module.exports.findOneProduct = (req, res) => {
    Product.findById( req.params.id )
    .then(theProduct => res.json({ product: theProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Edit one product
module.exports.updateOneProduct = (req, res) => {
    Product.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Delete one product
module.exports.deleteOneProduct = (req, res) => {
    Product.findByIdAndDelete( req.params.id )
        .then(deletedProduct => res.json({ product: deletedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}