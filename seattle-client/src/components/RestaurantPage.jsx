import React from 'react'
import './Overlay.css'

export default function RestaurantPage({ restaurant, onClose }) {
        return (
            <div className="card-details-overlay">
                <div className="card-details-content">
                    <button className='close-button' onClick={onClose}>
                        Close X
                    </button>
                    <div className="details-container">
                        <img src={restaurant.img} alt={restaurant.name} />
                        <h3>{restaurant.name}</h3>
                        <p>Rating: {restaurant.rating}/5</p>
                        <p>{(restaurant.cuisine).charAt(0).toUpperCase() + (restaurant.cuisine).slice(1)} cuisine</p>
                        <p>Address: {restaurant.address}</p>
                        <p>Phone: {restaurant.number}</p>
                        <a href={restaurant.url}>Visit {restaurant.name}</a>
                    </div>
                </div>
            </div>
        )
    }