const mongoose = require('mongoose');

const myJiniSchema = mongoose.Schema({
    weblink: {
        type: String,
        default: ""
    },
    appLink: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("myjini",myJiniSchema);