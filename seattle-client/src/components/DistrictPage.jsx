import React from 'react'
import './Overlay.css'

export default function DistrictPage({ district, onClose }) {
    return (
        <div className="card-details-overlay">
            <div className="card-details-content">
                <button className='close-button' onClick={onClose}>
                    Close X
                </button>
                <div className="details-container">
                    <img src={district.img} alt={district.name} />
                    <h3>{district.name}</h3>
                    <p>Population: {district.population}</p>
                    <h5>Did You Know?</h5>
                    <p>{district.fact}</p>
                </div>
            </div>
        </div>
    )
}