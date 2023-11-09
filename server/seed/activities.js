//pulling in our db and models
const db = require("../db");

//searching for relevant variables within the models folder:
const { Activity } = require("../models");
const { District } = require("../models");

//connecting to the db / giving us an error if anything goes wrong
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions.
//That way code-lines won't get thrown out of order
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

  const activities = [
    {
      name: "Seward Park",
      type: "nature",
      number: "(206) 702-3439",
      address: "3801 Discovery Park Blvd",
      url: "https://www.seattle.gov/parks/recreation/hiking-and-trails",
      priceRating: "free",
      familyFriendly: true,
      district: Magnolia[0]._id,
      image: "../assets/SewardPark.png",
      description:
        "A short distance from downtown Seattle, you'll find Discovery Park, a treasure to explore year-round. This park offers a mostly level loop trail spanning 2.8 miles, taking you through charming forests and meadows. Don't forget to bring a picnic to savor by the beach, where you can take in stunning vistas of Puget Sound and the Olympic Mountains. If you're looking for another easy urban hike, make your way to Olympic Sculpture Park (*2901 Western Ave) and take a leisurely walk along the Elliott Bay Trail by the waterfront.",
    },
    {
      name: "Mount Si",
      type: "nature",
      number: "N/A",
      address: "N/A",
      url: "https://www.wta.org/go-hiking/hikes/mount-si",
      priceRating: "free",
      familyFriendly: true,
      district: CentralSeattle[0]._id,
      image: "../assets/MountSi.png",
      description:
        "Mount Si is the most popular hike in the state. For a change in elevation, consider traveling 30 miles east of Seattle to reach the well-loved yet challenging Mount Si. The trail is an eight-mile round trip, ascending 3,100 feet, and rewards hikers with breathtaking views from the summit. If you're looking for something more beginner-friendly, nearby Rattlesnake Ledge offers a relatively easy two-mile trail with stunning perspectives and typically sees a constant flow of hikers. On your way back to Seattle, take a break at the Salish Lodge (*6501 Railroad Ave SE), where you can savor a meal while gazing at the majestic Snoqualmie Falls, which also features a family-friendly hiking trail.",
    },

    {
      name: "Tiger Mountain",
      type: "nature",
      number: "N/A",
      address: "N/A",
      url: "https://www.wta.org/go-hiking/hikes/tiger-mountain-trail",
      priceRating: "free",
      familyFriendly: true,
      district: Southeast[0]._id,
      image: "../assets/TigerMountain.png",
      description:
        "Discover the beauty of the Issaquah Alps by staying in the Cascade foothills and exploring trails like Tiger Mountain. This area offers picturesque views along the entire route, not just at the trail's end. Instead of a single prominent lookout, you can enjoy sightings of wildlife and wildflowers as you traverse the 15 miles of winding trails. For a particularly inspiring experience, make your way to Poo Poo Point (a 7.4-mile round trip) and witness the colorful paragliders taking flight from this elevated spot.",
    },

    {
      name: "Portage Bay",
      type: "nature",
      number: "N/A",
      address: "Central Seattle",
      url: "https://www.outdoorproject.com/united-states/washington/portage-bay-sea-kayaking",
      priceRating: "$$",
      familyFriendly: true,
      district: CentralSeattle[0]._id,
      image: "../assets/portagebay.png",
      description:
        "Rent a paddleboard or kayak at a rental shop on Portage Bay to paddle by houseboats, under bridges, and into Lake Union.",
    },
    {
      name: `Dimitrio's Jazz Alley`,
      type: "nightlife",
      number: "(206) 441-9729",
      address: "2033 6th Ave, Seattle, WA 98121",
      url: "https://www.jazzalley.com/www-home/",
      priceRating: "$$$",
      familyFriendly: false,
      district: Magnolia[0]._id,
      image: "../assets/Jazz.png",
      description: "This Jazz club has the best Jazz in the city!",
    },
    {
      name: "Seahawks Game",
      type: "sports",
      number: "(206) 381-7555",
      address: "800 Occidental Ave S, Seattle, WA 98134",
      url: "https://www.seahawks.com/www-home/",
      priceRating: "$$$$",
      familyFriendly: true,
      district: DowntownSeattle[0]._id,
      image: "../assets/seahawks.png",
      description:
        "Go see the Seahawks play at their home HTMLTextAreaElement, Lumen HTMLTextAreaElement, renowned for its world class sound acoustics.",
    },

    {
      name: "Museum of History and Industry",
      type: "history",
      number: "206 324 1126",
      address: "860 Terry Ave N, Seattle WA, 98109",
      url: "https://mohai.org/",
      priceRating: "$$",
      familyFriendly: true,
      district: Magnolia[0]._id,
      image: "../assets/historyindustry.png",
      description:
        "This museum focuses on the history of the Seattle area and is a great destination for those looking to learn more about the area!",
    },

    {
      name: "Seattle Art Museum",
      type: "art",
      number: "206.654.3100",
      address: "1300 FIRST AVE, SEATTLE, WA 98101",
      url: "https://www.seattleartmuseum.org/exhibitions/hokusai?gad_source=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XINLj3ZaATHIIEnbxxJsSM8QLHCIe3qC-4tF6AexTGmiJKNRTgu4cQAaAoV9EALw_wcB",
      priceRating: "$$$",
      familyFriendly: true,
      district: DowntownSeattle[0]._id,
      image: "../assets/seattle_art_museum.png",
      description:
        "Situated in the heart of downtown, just a block away from Pike Place Market, this cultural hub brings together global art collections, temporary exhibits, and displays from different corners of the world, connecting diverse cultures and spanning centuries.",
    },
    {
      name: "Ever Out",
      type: "music",
      number: "N/A",
      address: "N/A",
      url: "https://everout.com/seattle/music/",
      priceRating: "N/A",
      familyFriendly: true,
      district: CentralSeattle[0]._id,
      image: "../assets/EverOut.png",
      description:
        "Seattle is famous for its music scene, and you can find live events at this provided link!",
    },

    {
      name: `Dimitrio's Jazz Alley`,
      type: "music",
      number: "(206) 441-9729",
      address: "2033 6th Ave, Seattle, WA 98121",
      url: "https://www.jazzalley.com/www-home/",
      priceRating: "$$$",
      familyFriendly: false,
      district: Magnolia[0]._id,
      image: "../assets/Jazz.png",
      description: "This Jazz club has the best Jazz in the city!",
    },

    {
      name: "Seattle Space Needle",
      type: "landmarks",
      number: "(206) 905-2100",
      address: "400 Broad St, Seattle, WA 98109",
      url: "https://www.spaceneedle.com/",
      priceRating: "$$",
      familyFriendly: true,
      district: Magnolia[0]._id,
      image: "../assets/spaceNeedle.png",
      description:
        "Constructed in preparation for the 1962 World's Fair, the Space Needle, standing at a height of 605 feet, swiftly emerged as a universally recognized symbol of the city. Once you reach the observation level, accessible via a brief 43-second elevator ride, you'll have the opportunity to witness the original doodle-on-a-napkin idea that gave birth to the Space Needle's design. From the pinnacle, take in panoramic views encompassing Elliott Bay, the majestic Cascade Mountains, and even the imposing Mount Rainier.",
    },

    {
      name: "Woodland Park Zoo",
      type: "nature",
      number: "(206) 548-2500",
      address: "5500 Phinney Ave. N., Seattle, WA 98103",
      url: "https://www.zoo.org/",
      priceRating: "$$",
      familyFriendly: true,
      district: NorthwestSeattle[0]._id,
      image: "../assets/zoo.png",
      description:
        "Explore our exhibits to get close to more than 800 animals and 250 species—including some of the world's most critically endangered.",
    },

    {
      name: "Washington Park Arboretum",
      type: "nature",
      number: "(206) 543-8800",
      address: "5500 Phinney Ave. N., Seattle, WA 98103",
      url: "https://botanicgardens.uw.edu/washington-park-arboretum/",
      priceRating: "free",
      familyFriendly: true,
      district: NortheastSeattle[0]._id,
      image: "../assets/washingtonPark.png",
      description:
        "The Arboretum is a welcome oasis on the shores of Lake Washington. Jointly managed by the University of Washington Botanic Gardens and the City of Seattle, its 230 acres contain a dynamic assortment of plants, some found nowhere else in the Northwest.",
    },

    {
      name: "Alki Beach",
      type: "nature",
      number: "(206) 684-4075",
      address: "2665 Alki Ave SW, Seattle, WA 98116",
      url: "https://botanicgardens.uw.edu/washington-park-arboretum/",
      priceRating: "$",
      familyFriendly: true,
      district: Delridge[0]._id,
      image: "../assets/alki.png",
      description:
        "Stretching over 2.5 miles, this long beach strip is one of the most popular beaches in Seattle, partly because it was featured in the film 'Sleepless in Seattle'. This nostalgic seaside town is a great escape from the city, just a short water taxi ride from downtown Seattle.",
    },
    {
      name: "Kubota Garden",
      type: "nature",
      number: "206-725-5060",
      address: "10915 51st Ave S. Seattle, WA 98178",
      url: "https://kubotagarden.org/index.html",
      priceRating: "$",
      familyFriendly: true,
      district: Southeast[0]._id,
      image: "../assets/kubota.png",
      description:
        "20 acres, 11 ponds, 2 red bridges, 140 maple varieties, 30 hydrangea varieties.",
    },
  ];
  await Activity.deleteMany();
  let createActivity = await Activity.insertMany(activities);
  console.log(createActivity);
  console.log("created activities!");
};

const run = async () => {
  //runs our main function and awaits for the data to populate
  await main();
  //closes our db after its run so things don't break
  db.close();
};
run();
