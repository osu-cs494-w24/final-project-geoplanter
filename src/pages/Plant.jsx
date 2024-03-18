import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchPlant } from '../components/Fetchers'

/*
  Displays when a plant is selected
*/
export function Plant() {
  const params = useParams()
  const [plant, setPlant] = useState(null)
  const [error, setError] = useState(null)
  const plantid = params.plant.replace(/\D/g, '')
  
  useEffect(() => {
    const fetchPlantData = async () => {
      if (plantid) {
        try {
          const result = await fetchPlant(plantid)
          setPlant(result)
        } catch (error) {
          setError('Error fetching plants data')
          console.error('Error fetching plants data:', error)
        }
      }
    }

    fetchPlantData()
  }, [plantid])

  // The more in depth plant info section
  return (
    plant && (<>
      <h1>Plant</h1>
      <h2>{plant.common_name} | {plant.scientific_name}</h2>
    </>)
  )
}

/*
  The plant info section when no plant is selected
*/
export function SelectPlant() {

  // No plant selected placeholder
  return (
    <>
    <h1>PlantSelect</h1>
    </>
  )
}
