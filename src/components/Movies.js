import React from 'react'
import './Menu.css'

const Movies = ({label}) => (
  <div
    className="menu-item"
    style={{
      backgroundImage:
        'url(https://images.pexels.com/photos/3825568/pexels-photo-3825568.jpeg)',
    }}
  >
    <div className="overlay">
      <div className="label">{label}</div>
    </div>
  </div>
)

export default Movies
