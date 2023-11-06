const { Schema } = require('mongoose')
const restaurantSchema = new Schema (
    {
        name: {type: String, required: true},
        district: {type: String, required: true},
        rating: {type: Number, required: true},
        cuisine: {type: String, required: true},
        priceRating: {type: String, required: true},
        type: {type: String, required: true}

    },

    {timestamps: true})

    module.exports = restaurantSchema
