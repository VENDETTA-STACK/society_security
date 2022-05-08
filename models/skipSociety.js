const mongoose = require('mongoose');

const skipSocietySchema = mongoose.Schema({
    societyCode: [{
        type: String,
    }],
});

module.exports = mongoose.model("SkipSocietyInList",skipSocietySchema);