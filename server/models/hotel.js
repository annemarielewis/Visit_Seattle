const { Schema } = require('mongoose')
const hotelSchema = new Schema (
    {
        name: {type: String, required: true},
        district: {type: Schema.Types.ObjectId,
            required: true},
        rating: {type: Number, required: true},
        amenities: {type: String, required: true},
        url: {type: String, required: true},
        img: {type: String },
        phone_number: {type: String, required: true},
        address: {type: String, required: true}
    },
    { timestamps: true})

    module.exports = hotelSchema
