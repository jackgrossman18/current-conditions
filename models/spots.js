const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Spots = new Schema ({
    type: String,
    geometery: {
        type: String,
        coordinates: [Number]
    },
    properties: {
        Surf_Spot_Name: String,
        Location: String,
        MSW_Rating: String,
        Surfline_Rating: String,
        icon: String
    }
})



module.exports = mongoose.model('Spots', Spots)