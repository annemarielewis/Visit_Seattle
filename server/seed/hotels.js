const db = require('../db')
const { Hotel, District } = require('../models')


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

  const hotels = [
    // Northwest Seattle

    {
      name: "Hotel Ocean View",
      district: NorthwestSeattle[0]._id,
      rating: 4,
      amenities: "Swimming pool, fitness center, oceanfront rooms",
      url: "http://www.hoteloceanview.com",
      img: "../assets/hotelOceanView.png",
      phone_number: "(206) 555-1234",
      address: "123 Coastal Avenue, Northwest Seattle",
    },
    {
      name: "Pine Ridge Inn",
      district: NorthwestSeattle[0]._id,
      rating: 3,
      amenities: "Free breakfast, pet-friendly, cozy rooms",
      url: "http://www.pineridgeinn.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/2d/2e/eb/pine-ridge-inn-sign.jpg?w=500&h=-1&s=1",
      phone_number: "(206) 555-5678",
      address: "456 Evergreen Street, Northwest Seattle",
    },
    {
      name: "The Retreat Lodge",
      district: NorthwestSeattle[0]._id,
      rating: 5,
      amenities: "Spa, gourmet dining, mountain view suites",
      url: "http://www.retreatlodge.com",
      img: "https://www.rainbowlodge.org/uploads/2/4/1/9/24191179/31_orig.jpg",
      phone_number: "(206) 555-9876",
      address: "789 Mountain Road, Northwest Seattle",
    },
    // Northeast Seattle
    {
      name: "Lakefront Lodge",
      district: NortheastSeattle[0]._id,
      rating: 4,
      amenities: "Waterfront access, kayaking, lakeside dining",
      url: "http://www.lakefrontlodge.com",
      img: "https://a0.muscache.com/im/pictures/c29ecad6-19ca-4c82-821b-059eb6171f61.jpg?im_w=720",
      phone_number: "(206) 555-4321",
      address: "321 Lakeside Drive, Northeast Seattle",
    },
    {
      name: "Pinecrest Hotel",
      district: NortheastSeattle[0]._id,
      rating: 3,
      amenities: "Free Wi-Fi, continental breakfast, comfortable rooms",
      url: "http://www.pinecresthotel.com",
      img: "https://static.wixstatic.com/media/b878e0_62282c7dab004bf99c0446a68804f82a~mv2.jpg/v1/fill/w_1192,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_3401.jpg",
      phone_number: "(206) 555-8765",
      address: "654 Pine Street, Northeast Seattle",
    },
    {
      name: "Serenity Suites",
      district: NortheastSeattle[0]._id,
      rating: 5,
      amenities: "Spa, rooftop garden, luxury suites",
      url: "http://www.serenitysuites.com",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-3310287/original/e6beb8cc-23c3-41d0-b0ff-daaf3a656ad6.jpeg?im_w=720",
      phone_number: "(206) 555-3456",
      address: "123 Tranquil Lane, Northeast Seattle",
    },
    // Magnolia & Queen Anne
    {
      name: "Hillside Haven",
      district: Magnolia[0]._id,
      rating: 4,
      amenities: "Scenic views, garden, cozy rooms",
      url: "http://www.hillsidehaven.com",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-42685025/original/dae91497-aa07-4acd-9750-128efaac0814.jpeg?im_w=720",
      phone_number: "(206) 555-6789",
      address: "789 Hilltop Road, Magnolia & Queen Anne",
    },
    {
      name: "Queens Retreat",
      district: Magnolia[0]._id,
      rating: 3,
      amenities: "Historic charm, complimentary breakfast, garden view",
      url: "http://www.queensretreat.com",
      img: "../assets/queensRetreat.png",
      phone_number: "(206) 555-2345",
      address: "456 Royal Street, Magnolia & Queen Anne",
    },
    {
      name: "Magnolia Mansion",
      district: Magnolia[0]._id,
      rating: 5,
      amenities: "Elegant suites, gourmet dining, city views",
      url: "http://www.magnoliamansion.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/68/2d/11/luxury-suite--v11033726.jpg?w=1600&h=-1&s=1",
      phone_number: "(206) 555-7890",
      address: "321 Mansion Lane, Magnolia & Queen Anne",
    },
    //Central Seattle
    {
      name: "Central Retreat",
      district: CentralSeattle[0]._id,
      rating: 4,
      amenities: "Central location, cozy rooms, on-site restaurant",
      url: "http://www.centralretreat.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/fc/f4/fa/astra-hotel-seattle.jpg?w=1400&h=-1&s=1",
      phone_number: "(206) 555-2468",
      address: "123 Central Street, Central District",
    },
    //Downtown
    {
      name: "Downtown View Hotel",
      district: DowntownSeattle[0]._id,
      rating: 3,
      amenities: "Cityscape views, fitness center, modern rooms",
      url: "http://www.downtownviewhotel.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/84/44/74/double-queen-with-queen.jpg?w=1400&h=-1&s=1",
      phone_number: "(206) 555-7890",
      address: "456 Downtown Avenue, Downtown District",
    },
    //Southeast
    {
      name: "Southeast Serenity Inn",
      district: Southeast[0]._id,
      rating: 5,
      amenities: "Quiet location, garden, luxury suites",
      url: "http://www.southeastserenityinn.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/f2/5d/ef/hayes-room.jpg?w=1600&h=-1&s=1",
      phone_number: "(206) 555-6543",
      address: "789 Serene Street, Southeast District",
    },
    //delridge
    {
      name: "Delridge Retreat",
      district: Delridge[0]._id,
      rating: 4,
      amenities: "Scenic views, outdoor activities, comfortable rooms",
      url: "http://www.delridgeretreat.com",
      img: "https://media-cdn.tripadvisor.com/media/photo-w/29/52/00/29/the-grove-back-exterior.jpg",
      phone_number: "(206) 555-6543",
      address: "111 Delridge Ave, Delridge District"
    }
  ];
  
  await Hotel.deleteMany()
  await Hotel.insertMany(hotels);
  console.log("created hotels");
};
const run = async () => {
  await main();
  await db.close();
};

run();
