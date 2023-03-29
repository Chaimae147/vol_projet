import React from 'react'
import './Reservation.css'
import ticket from './reservation-billet-avion-ligne-appareil-concept-vol-voyage-planification-vacances-ete-illustration_277904-2817.png'
export default function PremiereStep() {
  return (
    <div className='boddy'>
      <div className='containner'>
    <form action="">
     <div className="form-content">
     <div className='reser-form'>
        <div className='tittle'>RESERVATION</div>
        <div className='input-boxes'>
          <div className='input-box'>
            <input type="text" placeholder="Selectionnez l'origine" required/>
          </div>
          <div className='input-box'>
            <input type="text" placeholder='Selectionnez destination' required/>
          </div>
          <div className='input-box'>
          <input type="text" placeholder="Date Depart" onFocus={(e) => e.currentTarget.type = "date"} onBlur={(e) => e.currentTarget.type = "text"} />
          </div>
          <div className=' input-box'>
          <input type="text" placeholder="Date Retour" onFocus={(e) => e.currentTarget.type = "date"} onBlur={(e) => e.currentTarget.type = "text"} />
          </div>
          <div className='button input-box'>
            <input type="submit" style={{ marginLeft:'70%' }} value='SUIVANT >'/>
          </div>
        </div>
      </div>
      <div className='cover'>  
           <img src={ticket} alt="" />
      </div>
     </div>
    </form>
  </div></div>
    
  /*   <div className='row justify-content-center' >
     <form action="" method="post" class="w-50">
          <div class="form-group mb-3 w-50">
            <label htmlFor="depart"></label>
          <input type="text" class="form-control" id="depart" placeholder="DEPART" name="depart" />
          </div>
        <div class="form-group mb-3 w-50">
            <label htmlFor="destination"></label>
        <input type="text" class="form-control" id="destination" placeholder="DESTINATION" name="destination"/>
        
        </div>
        <div class="btnnlog w-50 ">
          <button type="submit" name="submit" class=" form-control form-control-lg shadow-sm btn btn-primary " >Suivant</button>
        </div>
        
        </form>
    </div> */
  )
}
