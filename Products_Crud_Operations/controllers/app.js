
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const mongoose=require('mongoose');

const app = express();

//Set up mongoose connection

mongoose.connect("mongodb://localhost/productDB",{useNewUrlParser: true, useUnifiedTopology:true})
.then(function(){
    console.log("Connected to the database");
})
.catch(err => {
    console.log("Cannot connect to the database");
    process.exit();
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/products', product);

app.listen(3000, () => {
    console.log('Server is up and running on port number 3000 ' );
});
