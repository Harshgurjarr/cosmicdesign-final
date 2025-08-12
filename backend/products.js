const express = require('express');
const Product = require('../models/Product');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error });
    }
});


router.post('/', async (req, res) => {
    const { name, description, price, image, category } = req.body;
    try {
        const newProduct = new Product({ name, description, price, image, category });
        await newProduct.save();
        res.json({ msg: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
