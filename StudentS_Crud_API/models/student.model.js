const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Records_Schema = new Schema({
    name: {type: String, required: true, max: 100},
    reg_no: {type: Number, required: true},
    email:{type: String, required:true}
});
    // Export the model
    //records are table name which is case sensitive
    module.exports = mongoose.model('Record',Records_Schema );
