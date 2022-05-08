const mongoose = require('mongoose');

const advertiseServiceSchema = mongoose.Schema({
    advertiseId: {
        type: mongoose.Types.ObjectId,
        ref: "advertisement"
    },
    Title: {
        type: String,
        default: ""
    },
    Body: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("advertiseService",advertiseServiceSchema);