const mongoose = require('mongoose');

const MangaSchema = new mongoose.Schema({
    title: String,
    score: Number,
    author: String,
    genres: String,
    yourscore: Number
});

module.exports = mongoose.model('Manga', MangaSchema);