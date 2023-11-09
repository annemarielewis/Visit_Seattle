import React from 'react'
import './Overlay.css'

export default function HotelPage({ hotel, onClose }) {
    return (
        <div className="card-details-overlay">
            <div className="card-details-content">
                <button className='close-button' onClick={onClose}>
                    Close X
                </button>
                <div className="details-container">
                    <img src={hotel.img} alt={hotel.name} />
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
