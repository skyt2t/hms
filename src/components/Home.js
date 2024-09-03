import React from 'react'
import './Menu.css'

const Home = ({label}) => (
  <div
    className="menu-item"
    style={{
      backgroundImage:
        'url(https://images.pexels.com/photos/3627786/pexels-photo-3627786.jpeg)',
    }}
  >
    <div className="overlay">
      <div className="label">{label}</div>
    </div>
  </div>
)

export default Home
