import React from 'react'
import PropTypes from 'prop-types'
import "./childComponent.css"

const ChildComponent = ({ services }) => {

  
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'Pm' : 'Am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const sunrise = formatAMPM(new Date(services.current.sunrise))

  const sunset = formatAMPM(new Date(services.current.sunset))

  return (
    <div className='c-container'>
      <div className='c-top'></div>
      <div className='c-middle'>
        <ul className="c-m-div">
          <li className="c-div-data">
            <span className="c-t-data">Sunrise</span>
            <span className="c-t-data">{sunrise}</span>
          </li>
          <li className="c-div-data">
            <span className="c-m-data">Sunset</span>
            <span className="c-m-data">{sunset}</span>
          </li>
          <li className="c-div-data">
            <span className="c-b-data">Wind Speed</span>
            <span className="c-b-data">{`${services.current.wind_speed} Km/hr`}</span>
          </li>
        </ul>
      </div>
      <div className='c-bottom'>
        <span className="alert-title">
          Alerts
        </span>
        <span className="alert-data">
          {services.alerts[0].description}
        </span>
      </div>
    </div>
  )
}

ChildComponent.propTypes = {
  services: PropTypes.object.isRequired,
}

export default ChildComponent