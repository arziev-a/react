import axios from 'axios'

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location='
const API_KEY = 'KL968-ozC4VKl5p8sMomacPn1ea6lOghX2qEE3cxVlmZ9_6H_Ff2PwgUAOkn2ubQB6Z4BIyoJpMAdBBiqEoEUHXRyWc8ILZ1gjBoGZK5TEhGseK5TvbNfSKXIuIlYnYx'

const headers = {
  Authorization: `Bearer ${API_KEY}`
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers
})

export default axiosInstance