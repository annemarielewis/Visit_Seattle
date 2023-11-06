//purspose: create/export models from other files under models

const mongoose = require("mongoose");

//accessing the info from the other files in the models folder:
const DistrictSchema = require("./district");
const ActivitySchema = require("./activity");
const HotelSchema = require("./hotel");
const RestaurantSchema = require("./restaraunt");

const District = mongoose.model("District", DistrictSchema);
const Activity = mongoose.model("Activity", ActivitySchema);
const Hotel = mongoose.model("Hotel", HotelSchema);
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);


module.exports = {
District,
Activity,
Hotel,
Restaurant
};