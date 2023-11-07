const db = require("../db");
const { Restaurant } = require("../models");
const { District } = require('../models')

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
      name: "Duke's Seafood",
      district: NorthwestSeattle[0]._id,
      rating: 4.4,
      cuisine: 'seafood',
      priceRating: 3,
      url: 'https://www.dukesseafood.com/locations/lake-union/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-app&utm_content=lake-union',
      img: 'https://www.dukesseafood.com/',
      number: '(206) 382-9963',
      address: '1111 Fairview Ave N, Seattle, WA 98109',
      type: 'dine in'
    },
    {
        name: "Ray's Boathouse",
        district: NorthwestSeattle[0]._id,
        rating: 4.5,
        cuisine: 'seafood',
        priceRating: 3.5,
        url: 'https://www.rays.com/boathouse/',
        img: 'https://www.rays.com/boathouse/boathouse-menu/',
        number: '(206) 789-3770',
        address: '6049 Seaview Ave NW, Seattle, WA 98107',
        type: 'tavern'
    },
    {
        name: "Stanford's Northgate",
        district: NorthwestSeattle[0]._id,
        rating: 4.2,
        cuisine: 'seafood',
        priceRating: 4,
        url: 'https://stanfords.com/locations/northgate/',
        img: 'https://stanfords.com/about-stanfords/',
        number: '(206) 834-6277',
        address: '401 NE Northgate Way Ste 1106, Seattle, WA 98125',
        type: 'dine in'
    },
    {
        name: "Restaurant Christine",
        district: NorthwestSeattle[0]._id,
        rating: 4.8,
        cuisine: 'italian',
        priceRating: 3,
        url: 'https://restaurantchristineseattle.com/',
        img: 'https://img1.wsimg.com/isteam/ip/64b74d81-2ccb-4e10-9498-0d8e14539e64/chefplatingpic.jpg/:/cr=t:35.06%25,l:15.27%25,w:64.94%25,h:64.94%25/rs=w:671,cg:true,m',
        number: '(206) 420-4781',
        address: '2227 N 56th St, Seattle, WA 98103',
        type: 'dine in'
    },
    {
        name: 'Serendipity Cafe',
        district: Magnolia[0]._id,
        rating: 4,
        cuisine: 'italian',
        priceRating: 4,
        url: 'https://www.serendipitycafeandlounge.com/',
        img: 'https://togoorder.com/web/3419#/o/2/f/1/m/7388//item',
        number: '(206) 282-9866',
        address: '3222 West McGraw Street Seattle, WA 98199',
        type: 'cafe'
    },
    {
        name: "Katina's Kitchen",
        district: Magnolia[0]._id,
        rating: 4.5,
        cuisine: 'mexican',
        priceRating: 5,
        url: 'https://www.yelp.com/biz/katinas-kitchen-seattle',
        img: 'https://s3-media0.fl.yelpcdn.com/bphoto/Iuv2ry1YWsTnOhYDx3isAQ/258s.jpg',
        number: '(206) 284-0370',
        address: '4215 Gilman Ave W Seattle, WA 98199',
        type: 'dine in'
    },
    {
        name: "Niko's Gyros Magnolia",
        district: Magnolia[0]._id,
        rating: 4.5,
        cuisine: 'greek',
        priceRating: 3,
        url: 'places.singleplatform.com',
        img: 'https://lh3.googleusercontent.com/p/AF1QipP_Qn6VPUvomuk7Bq6ZHoraDatEAxjwi92nX3fb=s680-w680-h510',
        number: '(206) 285-4778',
        address: '2231 32nd Ave W, Seattle, WA 98199',
        type: 'counter-service'
    },
    {
        name: "Ba Bar Capitol Hill",
        district: CentralSeattle[0]._id,
        rating: 4.5,
        cuisine: 'vietnamese',
        priceRating: 3,
        url: 'https://babarseattle.com/',
        img: 'https://babarseattle.com/app/uploads/sites/3/2023/06/GrilledMoc_320x320-237x300.jpg',
        number: '(206) 328-2030',
        address: '550 12th Ave, Seattle, WA 98122',
        type: 'tavern'
    },
    {
        name: "Feed Co. Burgers",
        district: CentralSeattle[0]._id,
        rating: 4.2,
        cuisine: 'american',
        priceRating: 4,
        url: 'https://feedcoburgers.com/',
        img: 'https://feedcoburgers.com/wp-content/uploads/2020/07/88360878_1106370049713010_4128690175461031936_n.jpg',
        number: '(206) 726-6000',
        address: '1190 24th Ave, Seattle, WA 98122',
        type: 'counter-service'
    },
    {
        name: "Seattle Fish Guys",
        district: CentralSeattle[0]._id,
        rating: 4.6,
        cuisine: 'seafood',
        priceRating: 3.8,
        url: 'https://www.seattlefishguys.com/',
        img: 'https://www.seattlefishguys.com/menubar/38-off-storesmokedalder-smoked-salmon-1513363755.jpg',
        number: '(206) 485-7388',
        address: '411 23rd Ave S, Seattle, WA 98144',
        type: 'counter-service'
    },
    {
        name: "The Capital Grille",
        district: DowntownSeattle[0]._id,
        rating: 4.7,
        cuisine: 'american',
        priceRating: 4,
        url: 'https://www.thecapitalgrille.com/locations/wa/seattle/seattle/8030?cmpid=br:tcg_ag:ie_ch:dry_ca:TCGGMB_sn:gmb_gt:seattle-wa-8030_pl:locurl_rd:1026',
        img: 'https://www.thecapitalgrille.com/menu/lunch/entrees',
        number: '(206) 382-0900',
        address: '1301 4th Ave, Seattle, WA 98101',
        type: 'dine in'
    },
    {
        name: "Yard House",
        district: DowntownSeattle[0]._id,
        rating: 4.4,
        cuisine: 'american',
        priceRating: 4,
        url: 'https://www.yardhouse.com/home',
        img: 'https://media.yardhouse.com/en_us/images/product/Calamari-4-2020.jpg',
        number: '(206) 682-2087',
        address: '1501 4th Ave, Seattle, WA 98101',
        type: 'tavern'
    },
    {
        name: "Le Pichet",
        district: DowntownSeattle[0]._id,
        rating: 4.5,
        cuisine: 'french',
        priceRating: 4,
        url: 'https://www.lepichetseattle.com/',
        img: 'https://images.squarespace-cdn.com/content/v1/5d801eb8cdf2b3425da63361/1616966276971-5ZFMKFWDYKR1Z9N694N4/staff+lp.jpg?format=1000w',
        number: '(206) 256-1499',
        address: '1933 1st Ave, Seattle, WA 98101',
        type: 'dine in'
    },
    {
        name: 'Zouave Restaurant',
        district: NortheastSeattle[0]._id,
        rating: 4.7,
        cuisine: 'italian',
        priceRating: 2,
        url: 'https://www.zouaverestaurant.com/',
        img: 'https://www.zouaverestaurant.com/resources/rouladgnocpsb.jpg.opt852x347o0%2C0s852x347.jpg',
        number: '(206) 525-7747',
        address: '2615 NE 65th St, Seattle, WA 98115',
        type: 'dine in'
    },
    {
        name: 'JuneBaby',
        district: NortheastSeattle[0]._id,
        rating: 4.5,
        cuisine: 'american',
        priceRating: 4,
        url: 'https://www.junebabyseattle.com/',
        img: 'https://images.squarespace-cdn.com/content/v1/58657de98419c2fbf054bf0b/1642533322512-I3N9O2CZMM61FMQ3IX4Q/JuneBaby+Biscuit+n+syrup+4.jpg?format=300w',
        number: '(206) 257-4470',
        address: '2122 NE 65th St, Seattle, WA 98115',
        type: 'dine in'
    },
    {
        name: "mkt.",
        district: NortheastSeattle[0]._id,
        rating: 4.6,
        cuisine: 'italian',
        priceRating: 3,
        url: 'https://www.mkt-market.com/',
        img: 'https://static.wixstatic.com/media/d44019_f63b4083ddba4ed3b763e68b613ced5c~mv2.jpg/v1/fill/w_919,h_638,al_c,q_85,enc_auto/d44019_f63b4083ddba4ed3b763e68b613ced5c~mv2.jpg',
        number: '(206) 812-1580',
        address: '2108 N 55th St, Seattle, WA 98103',
        type: 'dine in'
    },
    {
        name: 'Pho Aroma',
        district: Delridge[0]._id,
        rating: 4.5,
        cuisine: 'vietnamese',
        priceRating: 4,
        url: 'https://lh3.googleusercontent.com/p/AF1QipP5t9Y10O2PUI6IQQBBiAznIvuFlr_cQXmIQV2H=s680-w680-h510',
        img: 'https://lh3.googleusercontent.com/p/AF1QipPYptmaAZ8eDohwQgI5dCQ6ErJuNA-sis0cbI9S=s680-w680-h510',
        number: '(206) 932-4343',
        address: '5605 Delridge Way SW, Seattle, WA 98106',
        type: 'dine in'
    },
    {
        name: 'Grillbird',
        district: Delridge[0]._id,
        rating: 4.7,
        cuisine: 'japanese',
        priceRating: 3,
        url: 'https://www.grillbird.com/',
        img: 'https://images.squarespace-cdn.com/content/v1/6520332ac20b0150f4ae16e8/9a61655c-0d0c-4df1-960e-dfd7bcc968ad/IMG_0785.jpeg?format=1000w',
        number: '(206) 402-4388',
        address: '6501 35th Ave SW, Seattle, WA 98126',
        type: 'dine in'
    },
    {
        name: "West Seattle Fish House",
        district: Delridge[0]._id,
        rating: 4.6,
        cuisine: 'seafood',
        priceRating: 4,
        url: 'https://wsfishhouse.com/',
        img: 'https://lh3.googleusercontent.com/PJD4Q6Mt8gi3ePSVL3VUmIZSfadss8jzOuEocC1Ew1fn8sUVm67UXV_LKJpsfvII6mKBYAS5H1eGY3agpDyl5IeJiVT8AHTzlUM=w574',
        number: '(206) 582-2140',
        address: '9005 35th Ave SW, Seattle, WA 98126',
        type: 'counter-service'
    },
    {
        name: "Monsoon Seattle",
        district: Southeast[0]._id,
        rating: 4.4,
        cuisine: 'vietnamese',
        priceRating: 3,
        url: 'https://monsoonrestaurants.com/seattle/',
        img: 'https://monsoonrestaurants.com/app/uploads/sites/2/2022/01/LAO7073-1024x1024.jpg',
        number: '(206) 325-2111',
        address: '615 19th Ave E, Seattle, WA 98112',
        type: 'counter-service'
    },
    {
        name: "Tai Tung Restaurant",
        district: Southeast[0]._id,
        rating: 4,
        cuisine: 'chinese',
        priceRating: 3,
        url: 'https://www.taitungrestaurant.com/',
        img: 'https://www.taitungrestaurant.com/menu',
        number: '(206) 622-7372',
        address: '655 S King St, Seattle, WA 98104',
        type: 'dine in'   
    },
    {
        name: "Noi Thai Cuisine - Downtown Seattle",
        district: Southeast[0]._id,
        rating: 4.4,
        cuisine: 'thai',
        priceRating: 4.5,
        url: 'https://www.seattle.noithaicuisine.com/',
        img: 'https://static.wixstatic.com/media/cdb79f_78e6b94d3b264bdbbf9f01a39a5811ee~mv2.jpg/v1/crop/x_595,y_0,w_2428,h_2412/fill/w_306,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3_%20Drunken%20Noodles%20-%201_JPG.jpg',
        number: '(206) 787-8444',
        address: '1303 1st Ave, Seattle, WA 98101',
        type: 'counter-service'
    }
  ];
  await Restaurant.insertMany(restaurantList) 
  console.log('Restaurants Created!')
};

const run = async () => {
    await main()
    await db.close()
}

run()