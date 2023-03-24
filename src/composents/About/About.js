import React from 'react'
import Cards from './Cards'
import './About.css'
import Navbar from '../navbar/Navbar'
export default function About() {
  return (
    <div className='backgroundd' >
        <div className='left'> 
        <Navbar/>
      </div>
        <div  className='oody' >
        <h1 className='titre'>Trouvez les meilleures offres avec TRAVAIL AIR</h1>

   <div className="card-container">
      <Cards
        title="DUBAI"
        imageSrc="dubai-3.jpg"
        description="VOLS À PARTIR DE 5800.0 MAD  À DUBAI"
      />
      <Cards
        title="PARIS"
        imageSrc="shutterstock_667548661.png"
        description="VOLS À PARTIR DE 1200.0 MAD  À DUBAI"
      /> 
      <Cards
      title="TOKYO"
      imageSrc="019d82a5aca2edbf9622b2d5d1b24b287658e571b9d83fce3ccacfb1888829aa.png"
      description="VOLS À PARTIR DE 10 000.0 MAD  À DUBAI"
    />

    {/* </div>
    <div className="card-container"> */}
      <Cards
        title="SEOUL"
        imageSrc="colourbox28767449-seoul-cj-nattanai-net.jpg"
        description="VOLS À PARTIR DE 12 000.0 MAD  À DUBAI"
        
      />
      <Cards
        title="MADRID"
        imageSrc="visiter-Madrid.png"
        description="VOLS À PARTIR DE 500.0 MAD  À DUBAI"
        
      /> 
      <Cards
      title="RIYADH"
      imageSrc="Riyadh-Saudi-Arabia.jpg"
      description="VOLS À PARTIR DE 5000.0 MAD  À DUBAI"
     
    />
    
</div>
    </div>
    </div>
  )
}
