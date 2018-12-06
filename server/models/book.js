/**
 * Mongoose Schemas & Models: Define datatype in MongoDB
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // ID will be created automatically by MongoDB
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);   // Model: MongoDB collection