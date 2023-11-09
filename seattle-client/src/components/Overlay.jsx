import React from 'react'
import './Overlay.css'

export default function HotelOverlay({ hotel, onClose }) {
    return (
        <div className="card-details-overlay">
            <div className="card-details-content">
                <button className='close-button' onClick={onClose}>
                    Close X
                </button>
                <div className="details-conatiner">
                    <img src="/assets/hotelExample.jpg" alt={hotel.name} />
                    <h3>{hotel.name}</h3>
                    <p>Rating: {hotel.rating}/5</p>
                    <p>Address: {hotel.address}</p>
                    <p>Phone: {hotel.phone_number}</p>
                    <p>Amenities: {hotel.amenities}</p>
                    <a href={hotel.url}>Visit {hotel.name}</a>
                </div>
            </div>
        </div>
    )
}

// export default function ActivityOverlay({ activity, onClose }) {
//     return (
//         <div className="card-details-overlay">
//             <div className="card-details-content">
//                 <button className='close-button' onClick={onClose}>
//                     Close X
//                 </button>
//                 <div className="details-conatiner">
//                     <img src={activity.img} alt={activity.name} />
//                     <h3>{activity.name}</h3>
//                     <p>Type: {activity.type}</p>
//                     <p>Family Friendly: {activity.familyFriendly}</p>
//                     <a href={activity.url}>Visit {activity.name}</a>
//                     <p>{activity.description}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default function RestaurantOverlay({ restaurant, onClose }) {
//     return (
//         <div className="card-details-overlay">
//             <div className="card-details-content">
//                 <button className='close-button' onClick={onClose}>
//                     Close X
//                 </button>
//                 <div className="details-conatiner">
//                     <img src={restaurant.img} alt={restaurant.name} />
//                     <h3>{restaurant.name}</h3>
//                     <p>Rating: {restaurant.rating}/5</p>
//                     <p>{restaurant.cuisine} cuisine</p>
//                     <p>Address: {restaurant.address}</p>
//                     <p>Phone: {restaurant.phone_number}</p>
//                     <a href={restaurant.url}>Visit {restaurant.name}</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

