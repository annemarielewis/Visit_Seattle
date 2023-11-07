
    const main = async () => { 
        const hotels = [
            // Northwest Seattle
    {
      name: 'Hotel Ocean View',
      district: /* Insert Northwest Seattle District ID here */,
      rating: 4,
      amenities: 'Swimming pool, fitness center, oceanfront rooms',
      url: 'http://www.hoteloceanview.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-1234',
      address: '123 Coastal Avenue, Northwest Seattle',
    },
    {
      name: 'Pine Ridge Inn',
      district: /* Insert Northwest Seattle District ID here */,
      rating: 3,
      amenities: 'Free breakfast, pet-friendly, cozy rooms',
      url: 'http://www.pineridgeinn.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-5678',
      address: '456 Evergreen Street, Northwest Seattle',
    },
    {
      name: 'The Retreat Lodge',
      district: /* Insert Northwest Seattle District ID here */,
      rating: 5,
      amenities: 'Spa, gourmet dining, mountain view suites',
      url: 'http://www.retreatlodge.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-9876',
      address: '789 Mountain Road, Northwest Seattle',
    },
    // Northeast Seattle
    {
      name: 'Lakefront Lodge',
      district: /* Insert Northeast Seattle District ID here */,
      rating: 4,
      amenities: 'Waterfront access, kayaking, lakeside dining',
      url: 'http://www.lakefrontlodge.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-4321',
      address: '321 Lakeside Drive, Northeast Seattle',
    },
    {
      name: 'Pinecrest Hotel',
      district: /* Insert Northeast Seattle District ID here */,
      rating: 3,
      amenities: 'Free Wi-Fi, continental breakfast, comfortable rooms',
      url: 'http://www.pinecresthotel.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-8765',
      address: '654 Pine Street, Northeast Seattle',
    },
    {
      name: 'Serenity Suites',
      district: /* Insert Northeast Seattle District ID here */,
      rating: 5,
      amenities: 'Spa, rooftop garden, luxury suites',
      url: 'http://www.serenitysuites.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-3456',
      address: '123 Tranquil Lane, Northeast Seattle',
    },
    // Magnolia & Queen Anne
    {
      name: 'Hillside Haven',
      district: /* Insert Magnolia & Queen Anne District ID here */,
      rating: 4,
      amenities: 'Scenic views, garden, cozy rooms',
      url: 'http://www.hillsidehaven.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-6789',
      address: '789 Hilltop Road, Magnolia & Queen Anne',
    },
    {
      name: 'Queen's Retreat',
      district: /* Insert Magnolia & Queen Anne District ID here */,
      rating: 3,
      amenities: 'Historic charm, complimentary breakfast, garden view',
      url: 'http://www.queensretreat.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-2345',
      address: '456 Royal Street, Magnolia & Queen Anne',
    },
    {
      name: 'Magnolia Mansion',
      district: /* Insert Magnolia & Queen Anne District ID here */,
      rating: 5,
      amenities: 'Elegant suites, gourmet dining, city views',
      url: 'http://www.magnoliamansion.com',
      img: 'hotel_image_url_here',
      phone_number: '(206) 555-7890',
      address: '321 Mansion Lane, Magnolia & Queen Anne',
    },]
    // Continue with hotels for other districts...
    await Hotel.insertMany(hotels);
    console.log("created hotels");;
}
  const run = async () => {
    await main();
    await db.close();
  };
  
  run();