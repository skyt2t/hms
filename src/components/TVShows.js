import React from 'react'
import './Menu.css'

const TVShows = ({label}) => (
  <div
    className="menu-item"
    style={{
      backgroundImage:
        'url(https://images.pexels.com/photos/204651/pexels-photo-204651.jpeg)',
    }}
  >
    <div className="overlay">
      <div className="label">{label}</div>
    </div>
  </div>
)

export default TVShows
