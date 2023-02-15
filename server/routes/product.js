const express = require('express');
const router = express.Router();

// Require controller modules.
const product = require('../controllers/product.js');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/getAllp', product.getAllProduct);
// to add a new product
router.post('/addp', product.addProduct)
// to update an existing product
router.put('/updatep/:idP', product.updateProduct);
// to delete an existing product
router.delete('/deletep/:idP', product.deleteProduct);


module.exports = router;