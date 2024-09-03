import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import TVShows from './components/TVShows'
import Sports from './components/Sports'
import Live from './components/Live'
import Settings from './components/Settings'
import './App.css'

const App = () => {
  const [language, setLanguage] = useState('English')

  const menuLabels = {
    English: {
      home: 'Home',
      movies: 'Movies',
      tvShows: 'TV Shows',
      sports: 'Sports',
      live: 'Live',
    },
    French: {
      home: 'Accueil',
      movies: 'Films',
      tvShows: 'Séries TV',
      sports: 'Sports',
      live: 'En direct',
    },
    German: {
      home: 'Startseite',
      movies: 'Filme',
      tvShows: 'Fernsehsendungen',
      sports: 'Sport',
      live: 'Live',
    },
    Russian: {
      home: 'Главная',
      movies: 'Фильмы',
      tvShows: 'Сериалы',
      sports: 'Спорт',
      live: 'Прямой эфир',
    },
    Spanish: {
      home: 'Inicio',
      movies: 'Películas',
      tvShows: 'Programas de TV',
      sports: 'Deportes',
      live: 'En vivo',
    },
    Chinese: {
      home: '首页',
      movies: '电影',
      tvShows: '电视节目',
      sports: '运动',
      live: '直播',
    },
  }

  return (
    <Router>
      <div className="app-container">
        <nav className="main-menu">
          <div className="menu-links">
            <Link to="/">{menuLabels[language].home}</Link>
            <Link to="/movies">{menuLabels[language].movies}</Link>
            <Link to="/tvshows">{menuLabels[language].tvShows}</Link>
            <Link to="/sports">{menuLabels[language].sports}</Link>
            <Link to="/live">{menuLabels[language].live}</Link>
          </div>
          <div className="settings">
            <Settings setLanguage={setLanguage} />
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home label={menuLabels[language].home} />}
          />
          <Route
            path="/movies"
            element={<Movies label={menuLabels[language].movies} />}
          />
          <Route
            path="/tvshows"
            element={<TVShows label={menuLabels[language].tvShows} />}
          />
          <Route
            path="/sports"
            element={<Sports label={menuLabels[language].sports} />}
          />
          <Route
            path="/live"
            element={<Live label={menuLabels[language].live} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
