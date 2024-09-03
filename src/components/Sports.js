import React from 'react'
import './Menu.css'

const Sports = ({label}) => (
  <div
    className="menu-item"
    style={{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?fit=crop&w=1024&h=768)',
    }}
  >
    <div className="overlay">
      <div className="label">{label}</div>
    </div>
  </div>
)

export default Sports
