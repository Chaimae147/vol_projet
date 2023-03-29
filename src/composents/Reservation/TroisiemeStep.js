import React from 'react'
import './Reservation.css'

import ticket from './reservation-billet-avion-ligne-appareil-concept-vol-voyage-planification-vacances-ete-illustration_277904-2817.png'

export default function TroisiemeStep() {
  return (
    <div className='boddy'>
    <div className='containner'>
  <form action="">
   <div className="form-content">
   <div className='reser-form'>
      <div className='tittle'>RESERVATION</div>
      <div className='tittle2'>MODE DE PAIMENT : </div>
      <div className='input-boxes'>
        <div className='input-box1'>
          <input type="radio" name='paiment' required/>&nbsp;&nbsp;&nbsp; CARTE BANCAIRE
        </div>
        <div className='input-box1'>
          <input type="radio"  name='paiment' required/>&nbsp;&nbsp;&nbsp;CARTE BANCAIRE INTERNATIONALE
        </div>
        
        <div className='input-box1'>
          <input type="radio"  name='paiment' required/>&nbsp;&nbsp;&nbsp;PAIMENT EN ESPECES
        </div>
        
        <div className='button input-box'>
        <input type="submit" className='' style={{ marginLeft:'0' }}  value='< PRECEDENT'/>

          <input type="submit" className='' value='RESERVER'/>
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
