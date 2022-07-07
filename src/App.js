import React  from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=233f3a4cb1feb400dc630bc111baf198`

  const searchLocation = (event) => {
    if(event.key === 'Enter')
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  }


  return (
    <div className='app'>
      <div className='search'>
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location...'
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>65°F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bott'>
          <div className='feels'>
            <p className='bold'>60°F</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12mph</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App