const ZIP_API = 'https://app.zipcodebase.com/api/v1/code/city?apikey='
const ZIP_KEY = '46ecc670-e6e2-11ee-b8b6-2996d19825be'

//const ZIP_KEY = '9402b620-e4ff-11ee-8794-43f5238cc635'

const HARDINESS_DATABASE = 'https://phzmapi.org/'

const PLANT_API = 'https://perenual.com/api/'
//const PLANT_KEY = 'sk-Wq5f65f89bc6f33d64785'

// 100 queries a day per a key
//const PLANT_KEY = 'sk-x3bW65f85518a4a534779'
const PLANT_KEY = 'sk-jako65f7a34c6b5fd4769'
//const PLANT_KEY = 'sk-Wq5f65f89bc6f33d64785'

/*
   Fetches a zip code using a city and state
*/
export async function fetchZipcode(cityName, stateName) {
   try {
      const promise = await fetch(
         `${ZIP_API}${ZIP_KEY}&city=${cityName}&state_name=${stateName}&country=us`
      )
      const response = await promise.json()
      return response
   } catch (error) {
      console.error('Error fetching data: ', error)
      throw error
   }
}

/*
   Fetches a hardiness level using a zip code
*/
export async function fetchHardiness(zip) {
   try {
      const promise = await fetch(
         `${HARDINESS_DATABASE}${zip}.json`
      )
      const response = await promise.json()
      return response
   } catch (error) {
      console.error('Error fetching data: ', error)
      throw error
   }
}

/*
   Fetches growable edible plants using hardiness level
*/
export async function fetchPlants(hardiness) {
   try {
      const promise = await fetch(
         `${PLANT_API}species-list?key=${PLANT_KEY}&edible=1&hardiness=${hardiness}`
      )
      const response = await promise.json()
      return response
   } catch (error) {
      console.error('Error fetching data: ', error)
      throw error
   }
}


/*
   Fetches a plant using an id
*/
export async function fetchPlant(id) {
   try {
      const promise = await fetch(
         `${PLANT_API}species/details/${id}?key=${PLANT_KEY}`
      )
      const response = await promise.json()
      return response
   } catch (error) {
      console.error('Error fetching data: ', error)
      throw error
   }
}