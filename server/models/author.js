/**
 * Mongoose Schemas & Models: Define datatype in MongoDB
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    // ID will be created automatically by MongoDB
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);   // Model: MongoDB collection