const Product = require('../models/product.model');

exports.product_create=function(req,res){
    let product=new Product({
        name:req.body.name,
        price:req.body.price
    });

    product.save(function(err){
        if(err){
            //it doesnot crash the application when there is any error
            return next(err);
        }
        else{ 
            res.send('Product Created Successfully');
        }
        
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err){
             return next(err);
        }
        else{
        res.send('Product updated.');
        }
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        else{
        res.send('Deleted successfully!');
      }
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return next(err);
        }
        else{
        res.send(product);
        }
    })
};
