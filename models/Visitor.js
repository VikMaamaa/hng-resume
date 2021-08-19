/*eslint-disable*/
const mongoose = require("mongoose")

const VisitorSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: false
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    message: {
        type: String,
        required: false,
    }
}, { timestamps: true })

module.exports = mongoose.model("Visitor", VisitorSchema)