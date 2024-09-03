import React from 'react'
import './Menu.css'

const Menu = ({labels}) => {
  const menuItems = [
    {
      key: 'home',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1024&h=768',
    },
    {
      key: 'movies',
      image:
        'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?fit=crop&w=1024&h=768',
    },
    {
      key: 'tvShows',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?fit=crop&w=1024&h=768',
    },
    {
      key: 'sports',
      image:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?fit=crop&w=1024&h=768',
    },
    {
      key: 'live',
      image:
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?fit=crop&w=1024&h=768',
    },
  ]

  return (
    <div>
      {menuItems.map(item => (
        <div
          key={item.key}
          className="menu-item"
          style={{backgroundImage: `url(${item.image})`}}
        >
          <div className="overlay">
            <div className="label">{labels[item.key]}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu
