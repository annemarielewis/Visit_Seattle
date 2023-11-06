//step 2 -->
//purpose = create schemas (set of rules) for collections

const { Schema } = require("mongoose");

const ActivitySchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    number: { type: String, required: true },
    address: { type: String, required: true },
    url: { type: String, required: true },
    priceRating: { type: String, required: false },
    familyFriendly: { type: Boolean, required: true },
    district: {
      type: Schema.Types.ObjectId,
      ref: "District._id",
      required: false,
    },
    image: { image: Buffer, required: true },
    rating: { type: String, required: false },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = ActivitySchema;
