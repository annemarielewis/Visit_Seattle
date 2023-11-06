const { Schema } = require('mongoose')
const districtSchema = new Schema (
    {
        id: {type: String, required: true},
        name: {type: String, required: true},
        population: {type: Number, required: true},
        fact: {type: String, required: true}
    },

    { timestamps: true})

    module.exports = districtSchema
