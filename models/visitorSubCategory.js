const mongoose = require('mongoose');

const visitorSubCategorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: Number,
        require: true
    },
    parentCategory: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model("visitorSubCategory",visitorSubCategorySchema);