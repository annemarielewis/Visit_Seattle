const db = require("../db");
const { District } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const districtList = [
    {
      name: "Northwest Seattle",
      population: 749256,
      fact: "Seattle had real-life superheroes; town people put on costumes and tackled crime!",
      img: 'https://static.showit.co/1200/wELcgWnLRIK1tvJI569C-Q/152176/northwest-seattle.jpg'
    },
    {
      name: "Northeast Seattle",
      population: 241989,
      fact: "Seattle Seahawk fans caused an earthquake.",
      img: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_mobile_2x/f_auto/seahawks/tldx20ompmg1lbzoavkp.jpg'
    },
    {
      name: "Magnolia & Queen Anne",
      population: 22890,
      fact: "Seattle is home to the world's first revolving restaurant, built in 1961 atop the Space Needle.",
      img: "https://www.spaceneedle.com/imager/assets/18700/About_TheLoupe_c51ccd2aada8e2834da211727c3114a9.jpg"
    },
    {
      name: "Central Seattle",
      population: 30552,
      fact: "The Klondike Gold rush contributed to Seattle's largest population boom.",
      img: 'https://goodmigrations.com/wp-content/themes/goodMigrationsV5/static/images/locations/seattle/neighborhoods/central-district-banner.png'
    },
    {
      name: "Downtown Seattle",
      population: 99000,
      fact: "Harbor island is a completely man-made island.",
      img: 'https://uploads.visitseattle.org/2017/02/30115610/IMG_1491.jpg'
    },
    {
      name: "West Seattle & Delridge",
      population: 80154,
      fact: "Seattle has an entire wall filled with used gum.",
      img: 'https://onthegomoving.com/wp-content/uploads/2020/02/living-in-west-seattle-like.jpg'
    },
    {
      name: "Southeast Seattle",
      population: 84000,
      fact: "Seattle is the coffee capital of America.",
      img: 'https://cdn.shortpixel.ai/spai2/q_lossy+ret_img+to_webp/seattlemag.com/wp-content/uploads/2021/12/columbiacity_1.jpg'
    },
  ];

  await District.deleteMany()
  await District.insertMany(districtList);
  console.log("created districts");
};

const run = async () => {
  await main();
  await db.close();
};

run();
