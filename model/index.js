const mongoose=require('mongoose');
const todoSchema=mongoose.Schema;

var Todo= new todoSchema({
    text:{
        type:String
    }
});

module.exports = mongoose.model('Todo',Todo,'todo');