// src/components/TrackCard.jsx
import React from 'react'

const TrackCard = ({ resources, onSave }) => (
  <div>
    {resources.map((res, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <h6>{res.type}: {res.title}</h6>
          <a href={res.link} className="btn btn-outline-primary btn-sm mt-2">
            Open {res.type}
          </a>
        </div>
      </div>
    ))}
    <button className="btn btn-success mt-3" onClick={onSave}>Save to My Journey</button>
  </div>
)

export default TrackCard
