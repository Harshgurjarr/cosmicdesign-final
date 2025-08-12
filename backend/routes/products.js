const express = require('express');
const Product = require('../models/product'); 
const router = express.Router();


router.post('/', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    try {
        const newProduct = new Product({
            name,
            description,
            price,
            imageUrl
        });
        await newProduct.save();
        res.status(201).json({ msg: 'Product created successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ msg: 'Error creating product', error });
    }
});


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching products', error });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching product', error });
    }
});


router.put('/:id', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, imageUrl },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.status(200).json({ msg: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ msg: 'Error updating product', error });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.status(200).json({ msg: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting product', error });
    }
});

module.exports = router;
