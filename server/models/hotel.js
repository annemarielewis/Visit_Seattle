const { Schema } = require('mongoose')
const hotelSchema = new Schema (
    {
        name: {type: String, required: true},
        district: {type: Schema.Types.ObjectId,
            ref: "District._id",
            required: false,},
        rating: {type: Number, required: true},
        amenities: {type: String, required: true},
        url: {type: String, required: true},
        img: {type: String, required: true},
        number: {type: String, required: true},
        address: {type: String, required: true}
    },
    { timestamps: true})

    module.exports = hotelSchema
