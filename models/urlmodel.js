const mongoose = require('mongoose');

const urlModel = mongoose.model("shortUrls", new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    updatedUrl: {
        type: String,
        reqired: true,
        unique: true,
    },
    visitHistory: [{
        timestamp: { type: Number,}
    }]
}));

module.exports = urlModel;