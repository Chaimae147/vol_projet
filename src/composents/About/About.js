import React, { useState } from 'react'
import Cards from './Cards'
import './About.css'
import Navbar from '../navbar/Navbar'
import { data } from './data'
export default function About() {
  const [chercher,setChercher]=useState('');

  return (
    <div className='backgroundd' >
        <div className='left'> 
        <Navbar/>
      </div>
        <div  className='oody' >
        <h1 className='titre'>Trouvez les meilleures offres avec TRAVAIL AIR</h1>
       <div class="input-group">
      <input type="search" className="form-control  cher" onChange={(e)=>setChercher(e.target.value)}  placeholder=" Cherchez la ville vous voulez reserver" /> 
   </div> 
   <div className="card-container">
   
      {
        data.filter((t)=>{
          return chercher.toLocaleLowerCase() === ''? t : t.title.toLocaleLowerCase().includes(chercher);
         }).map((item)=>(
          <Cards title={item.title}  imageSrc={item.imageSrc} description={item.description} />
        ))
      }
    
</div>
    </div>
  
    </div>
  )
}
