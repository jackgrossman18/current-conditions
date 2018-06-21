const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comments = new Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model("Comments", Comments)