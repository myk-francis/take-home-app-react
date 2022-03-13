import React, { useState, useEffect } from "react"
import ChildComponent from "./ChildComponent"
import axios from 'axios'
import "./parentComponent.css"

const ParentComponent = () => {

  const [clicked, setOpen] = useState(false)
  const [services, setServices] = useState(null)

  // const dateValue = new Date(services.current.dt).toDateString() //getting weird error here but worked when I used next js instead
  const dateValue = new Date().toLocaleDateString("en-US");

  useEffect(() => {
    GetData()
    //eslint-disable-next-line
  }, [])

  const GetData = async () => {
    try {
      var res = null
  
      res = await axios.get('https://firebasestorage.googleapis.com/v0/b/navierre-test.appspot.com/o/data.json?alt=media&token=95462ce7-0718-4111-87ca-6c2ae9c78180')

  
      setServices(res.data)
      console.log(res.data)
    } catch (error) {
      console.error(error.message)
    }

  }

  if (services === null) {
    return (
      <h1>Get request failed</h1>
    )
  } 
  else if(clicked) {
    return (
    <ChildComponent services={services}/>
    )
  } else {
    return (
      <div className='p-container'>
        <div className="p-top">
          <div className="p-top-logo-container">
            W
          </div>
        </div>
        <div className="p-middle">
          <div className="p-middle-container">
            <div className="p-m-city">{services.city}{', '}{services.state}</div>
            <div className="p-m-date">{dateValue}</div>
            <div className="p-m-bottom"></div>
          </div>
          <button className='btn' onClick={()=>setOpen(true)}>Details</button>
        </div>
        <div className="p-bottom">
          <div className="p-bottom-container">
            <ul className="p-b-list">
              <li className="p-b-weather-cont">
                <i className="fas fa-water"></i>
                <span className="p-b-data">Precipitation</span>
                <span className="p-b-data">{services.current.precipitation}</span>
              </li>
              <li className="p-b-weather-cont">
                <i className="fas fa-shower" />
                <span className="p-b-data">Humidity</span>
                <span className="p-b-data">{services.current.humidity}</span>
              </li>
              <li className="p-b-weather-cont">
                <i className="fas fa-wind"></i>
                <span className="p-b-data">Wind</span>
                <span className="p-b-data">{services.current.wind_speed}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  } 
}

export default ParentComponent