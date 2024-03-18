import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/*
  Prompts the user to enter a city, state, and submit
*/
export default function SearchBar() {
  const [ cityName, setCityName ] = useState('')
  const [ stateName, setStateName ] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    navigate("/"+cityName+","+stateName)
  }

  // Search Bar
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter city name"
        />
        <input
          type="text"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          placeholder="Enter state name"
        />
        <button type="submit">Search</button>
      </form>
    </>
  )
}
