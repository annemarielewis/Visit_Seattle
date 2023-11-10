import React from 'react'
import './Overlay.css'

export default function ActivityPage({ activity, onClose }) {

    let familyFriendly

    if (activity.familyFriendly === true) {
        familyFriendly = 'yes'
    } else {
        familyFriendly = 'no'
    }

      return (
          <div className="card-details-overlay">
              <div className="card-details-content">
                  <button className='close-button' onClick={onClose}>
                      Close X
                  </button>
                  <div className="details-container">
                      <img src={activity.image} alt={activity.name} />
                      <h3>{activity.name}</h3>
                      <p>Type: {activity.type}</p>
                      <p>Family Friendly: {familyFriendly}</p>
                      <a href={activity.url}>Visit {activity.name}</a>
                      <p>{activity.description}</p>
                  </div>
              </div>
          </div>
      )
  }