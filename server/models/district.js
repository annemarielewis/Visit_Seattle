const { Schema } = require('mongoose')
const districtSchema = new Schema (
    {
       
        name: {type: String},
        population: {type: Number},
        fact: {type: String}
    },

    { timestamps: true})

    module.exports = districtSchema
