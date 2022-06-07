const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note:{
        type:String,
        required:[true,"Note is a required field"]
    }
},{timestamps:true});

module.exports = new mongoose.model("note",noteSchema);