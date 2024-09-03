import React from 'react'
import './Settings.css'

const Settings = ({setLanguage}) => {
  const handleLanguageChange = e => {
    setLanguage(e.target.value)
  }

  return (
    <select id="language-select" onChange={handleLanguageChange}>
      <option value="English">English</option>
      <option value="French">French</option>
      <option value="German">German</option>
      <option value="Russian">Russian</option>
      <option value="Spanish">Spanish</option>
      <option value="Chinese">Chinese</option>
    </select>
  )
}

export default Settings
