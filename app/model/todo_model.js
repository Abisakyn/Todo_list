const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model("Todo",todoSchema);
