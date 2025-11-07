// src/components/GoalCard.jsx
import React from 'react'

const GoalCard = ({ track, onSelect }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <img src={track.image} className="card-img-top" alt={track.title} />
      <div className="card-body">
        <h5 className="card-title">{track.title}</h5>
        <p className="card-text text-muted">{track.description}</p>
        <button className="btn btn-primary" onClick={() => onSelect(track)}>
          View Track
        </button>
      </div>
    </div>
  </div>
)

export default GoalCard
