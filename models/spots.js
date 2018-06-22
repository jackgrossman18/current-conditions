const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Spots = new Schema ({
    Surf_Spot_Name: String,
    Location: String,
    Region: String
})

module.exports = mongoose.model('Spots', Spots)