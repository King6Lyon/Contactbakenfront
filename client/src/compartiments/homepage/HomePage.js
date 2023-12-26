import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className="containerhome" >
    <div className="cardH">
      <h1 className="titleH">Designed For Work</h1>
      <p className="subtitleH">
        Introducing the first ever 5G enabled tablet. You've got a tablet that
        let's you play harder and work smarter.
      </p>
      
    </div>
    < div className='homebtn'><button className="btn"onClick={()=> navigate('/dashbord')}>Get Dashbord</button>
      <button className="btn"onClick={()=> navigate('/ajoutClient')}>Get Ajout</button>
      <button className="btn"onClick={()=> navigate('/afficheClient')}>Set client</button></div>
  </div>

  </div>
  )
}

export default HomePage
