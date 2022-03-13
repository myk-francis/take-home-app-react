import React from 'react'
import ParentComponent from "../components/ParentComponent";
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className="home-left"></div>
      <div className="home-middle">
        <ParentComponent/>
      </div>
      <div className="home-right"></div>
    </div>
  )
}

export default Home