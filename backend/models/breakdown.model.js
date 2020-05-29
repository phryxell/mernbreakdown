const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const breakdownSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    breakdowntime: { type: Number, required: true},
    youtubeurl: { type: String, required: true },
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Breakdown = mongoose.model('Breakdown', breakdownSchema);

module.exports = Breakdown;