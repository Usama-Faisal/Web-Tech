
const express = require('express');
//const bodyParser = require('body-parser');
const std = require('./routes/student.routes');

const mongoose=require('mongoose');

const app = express();

//Set up mongoose connection

mongoose.connect("mongodb://localhost/studentDB",{useNewUrlParser: true, useUnifiedTopology:true})
.then(function(){
    console.log("Connected to the database");
})
.catch(err => {
    console.log("Cannot connect to the database");
    process.exit();
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/students',std)
app.listen(3000, () => {
    console.log('Server is up and running on port number 3000 ' );
});
