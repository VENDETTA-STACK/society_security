const mongoose = require('mongoose');

const guestCategorySchema = mongoose.Schema({
    guestType: {
        type: String,
        require: true
    },
    image: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model("GuestCategory",guestCategorySchema);