import React from 'react'
import './Menu.css'

const Live = ({label}) => (
  <div
    className="menu-item"
    style={{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?fit=crop&w=1024&h=768)',
    }}
  >
    <div className="overlay">
      <div className="label">{label}</div>
    </div>
  </div>
)

export default Live
