const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    longUrl: {
        type: String,
        required: true,
    },
    shortCode: {
        type: String,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    linkClicks: {
        type: Number,
        default: 0,
    }
});

const urlModel = mongoose.model("url", urlSchema);

module.exports = {
    urlModel
};
