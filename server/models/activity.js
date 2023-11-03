//step 2 -->
//purpose = create schemas (set of rules) for collections

const { Schema } = require("mongoose");

const CountySchema = new Schema(
  {
    name: { type: String, required: true },
    //population2023: { type: Number, required: false },
    rankinwealth: { type: Number, required: false }, //rank is 1-5 out of the 5 boroughs
  },
  { timestamps: true }
);

module.exports = CountySchema;
