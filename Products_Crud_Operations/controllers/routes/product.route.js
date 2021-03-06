const express = require('express');
const router = express.Router();

// Require the controllers 
const product_controller = require('../controllers/product.controller');


router.get('/:id', product_controller.product_details);

router.post('/create',product_controller.product_create);

router.put('/:id/update',product_controller.product_update);

router.delete('/:id/delete',product_controller.product_delete);


module.exports = router;
