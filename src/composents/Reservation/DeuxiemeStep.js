import React, {useState}from 'react'
import './Reservation.css'

import ticket from './reservation-billet-avion-ligne-appareil-concept-vol-voyage-planification-vacances-ete-illustration_277904-2817.png'
export default function DeuxiemeStep() {
 
  return (
    <div className='boddy'>
    <div className='containner'>
  <form action="">
   <div className="form-content">
   <div className='reser-form'>
      <div className='tittle'>RESERVATION</div>
      <div className='input-boxes'>
        <div className='input-box'>
          <label> Classe:
            <select>
              <option value="economy">Economique</option>
              <option value="business">Affaires</option>
              <option value="first">Première classe</option>
           </select>
          </label>
          </div>
         <div className='input-box'>
            <input type="text" placeholder="CODE DE REDUCTION" required/>
          </div>
          <div className='input-box'>
          <label> PASSAGERS :
            <select>
              <option value="ADULTES">ADULTES</option>
              <option value="ENFANTS">ENFANTS</option>
              <option value="BEBES">BEBES</option>
           </select>
          </label>
          </div>
         
        <div className='button input-box'>
        <input type="submit" className='' style={{ marginLeft:'0' }}  value='< PRECEDENT'/>

          <input type="submit" className='' value='SUIVANT >'/>
        </div>
      </div>
    </div>
    <div className='cover'>  
         <img src={ticket} alt="" />
    </div>
   </div>
  </form>
</div></div>
  )
}
