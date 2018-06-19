const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Spots = new Schema ({
    name: String,
    state: String,
    region: String
})

module.exports = mongoose.model('Spots', Spots)