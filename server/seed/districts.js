const db = require("../db");
const { District } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const districtList = [
    {
      name: "Northwest Seattle",
      population: 749256,
      fact: "Seattle had real-life superheroes; town people put on costumes and tackled crime!",
    },
    {
      name: "Northeast Seattle",
      population: 241989,
      fact: "Seattle Seahawk fans caused an earthquake.",
    },
    {
      name: "Magnolia & Queen Anne",
      population: 22890,
      fact: "Seattle is home to the world's first revolving restaurant, built in 1961 atop the Space Needle.",
    },
    {
      name: "Central Seattle",
      population: 30552,
      fact: "The Klondike Gold rush contributed to Seattle's largest population boom.",
    },
    {
      name: "Downtown Seattle",
      population: 99000,
      fact: "Harbor island is a completely man-made island.",
    },
    {
      name: "West Seattle & Delridge",
      population: 80154,
      fact: "Seattle has an entire wall filled with used gum.",
    },
    {
      name: "Southeast Seattle",
      population: 84000,
      fact: "Seattle is the coffee capital of America.",
    },
  ];

  await District.insertMany(districtList);
  console.log("created districts");
};

const run = async () => {
  await main();
  await db.close();
};

run();
