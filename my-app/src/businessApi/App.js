import axios from "axios"
import { useState, useEffect } from "react"
import axiosInstance from "./helpers/axios"
import Category from './components/Category'
const App = () => {
  const [location, setLocation] = useState('NewYork')
  const [businesses, setBusiness] = useState([])
  
  const callToApi = async() => {
    const req = await axiosInstance.get(location)
    setBusiness(req.data)
  }

  useEffect(() => {
    callToApi()
  },[])

  return <div className="App">
    <header className="App-header">
      <Category data={businesses.businesses ? businesses.businesses : []} />
    </header>
  </div>
}

export default App