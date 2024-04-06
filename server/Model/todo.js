const mongoose = require('mongoose');

const Todoschema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    } 
}, {
    timestamps: true
})

const Todomodel = mongoose.model('Todo', Todoschema)
module.exports = Todomodel