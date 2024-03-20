import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

import { fetchZipcode, fetchHardiness, fetchPlants } from '../components/Fetchers'
import { noPremium } from '../components/Filters'

import '../style.css'
/*
  Display when a location has been searched
*/
export function Location(props) {
  const params = useParams()
  const [zipcode, setZipcode] = useState(null)
  const [hardiness, setHardiness] = useState(null)
  const [plants, setPlants] = useState(null)
  const [error, setError] = useState(null)

  const location = params.location.split(',')
  const cityName = location[0]
  const stateName = location[1]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchZipcode(cityName, stateName)
        setZipcode(result.results[0])
      } catch (error) {
        setError('Error fetching zipcode data')
        console.error('Error fetching zipcode data:', error)
      }
    }

    fetchData()
  }, [cityName, stateName])

  useEffect(() => {
    const fetchHardinessData = async () => {
      if (zipcode) {
        try {
          const result = await fetchHardiness(zipcode)
          setHardiness(result.zone.replace(/\D/g, ''))
        } catch (error) {
          setError('Error fetching hardiness data')
          console.error('Error fetching hardiness data:', error)
        }
      }
    }

    fetchHardinessData()
  }, [zipcode])

  useEffect(() => {
    const fetchPlantsData = async () => {
      if (hardiness) {
        try {
          const result = await fetchPlants(hardiness)
          setPlants(noPremium(result.data))
        } catch (error) {
          setError('Error fetching plants data')
          console.error('Error fetching plants data:', error)
        }
      }
    }

    fetchPlantsData()
  }, [hardiness])

  if (error) {
    return <div>{error}</div>
  }

  // This is the side bar for local edible plants
  return (
    <>
      <div className="sidebar">
        <h1>Location</h1>
        {zipcode && hardiness && plants && (
          <ul>
            {plants.map(plant => (
              <li key={plant.id}>
                <NavLink to={"/" + cityName + "," + stateName + "/" + plant.common_name.replace(/\s/g, '') + plant.id}>
                  <h1>{plant.common_name}</h1>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="content">
        <main>{props.children || <Outlet />}</main>
      </div>
    </>
  )
}