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
    plant && (
    <div className="plant-container">
      {console.log(plant)}
      <h1>{plant.common_name}</h1>
      <h2>{plant.scientific_name}</h2>
      <img src={plant.default_image.original_url} alt={plant.common_name} />
      <p>{plant.description}</p>
      <div className="plant-details">
        <h3>Details</h3>
        <p><strong>Family: </strong>{plant.family}</p>
        <p><strong>Edible Parts: </strong>{plant.edible_fruit && (<>fruit </>)}{plant.edible_leaf && (<>leaves </>)}</p>
        <p><strong>Harvest Season: </strong>{plant.harvest_season}</p>
      </div>
    </div>
    )
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
