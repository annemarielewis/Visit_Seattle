//step 2 -->
//purpose = create schemas (set of rules) for collections

const { Schema } = require("mongoose");

const activitySchema = new Schema(
  {
    name: { type: String },
    type: { type: String },
    number: { type: String },
    address: { type: String },
    url: { type: String },
    priceRating: { type: String },
    familyFriendly: { type: Boolean },
    district: {
      type: Schema.Types.ObjectId
    },
    image: { image: String },
    rating: { type: String },
    description: { type: String },
  },
  { timestamps: true }
)

module.exports = activitySchema;
