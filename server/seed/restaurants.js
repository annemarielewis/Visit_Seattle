const db = require("../db");
const { Restaurant } = require("../models");

db.on("error", console.error.bind(console, "Mongodb connection error:"));

const main = async () => {
  const Magnolia = await District.find({
    name: "Magnolia & Queen Anne",
  });
  const CentralSeattle = await District.find({
    name: "Central Seattle",
  });
  const DowntownSeattle = await District.find({
    name: "Downtown Seattle",
  });
  const NorthwestSeattle = await District.find({
    name: "Northwest Seattle",
  });
  const NortheastSeattle = await District.find({
    name: "Northeast Seattle",
  });
  const Delridge = await District.find({
    name: "West Seattle & Delridge",
  });
  const Southeast = await District.find({
    name: "Southeast Seattle",
  });

  const restaurantList = [
    {
      name: "Dukes Seafood",
      district: Magnolia[0]._id,
    },
  ];
};
