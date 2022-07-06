import React from 'react'
import { useState } from "react"
import './App.css'


function App() {

  const apiKey = '30d4741c779ba94c470ca1f63045390a'
  const [weatherData, setWeatherData] = useState ([{}])

  return (
    <div className='container'>
      <input className='input' placeholder='Enter City...'/>

    </div>
  )
}

export default App