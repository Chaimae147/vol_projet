
import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Reservation.css"
import ticket from './reservation-billet-avion-ligne-appareil-concept-vol-voyage-planification-vacances-ete-illustration_277904-2817.png'
import { useState } from 'react'

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [origine, setOrigine] = useState('');
  const [destination, setDestination] = useState('');
  const [depart, setDepart] = useState('');
  const [retour, setRetour] = useState('');
  const [classe, setClasse] = useState('');
  const [reduction, setReduction] = useState('');
  const [passager, setPassagers] = useState('');
  const [modePay, setModepay] = useState('');

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };
  

  const progress = ((step - 1) / 3) * 100; // Assuming three steps
  return (

    <div className='backgroundss'>
      <Navbar/>
      <div className='boddy'>
      <div className='containner'>
      <div className='tittle' style={{ marginBottom:'20px'}}>RESERVATION</div>

      <div style={{ width: '100%', height: '10px', backgroundColor: '#ddd' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'blue' }} />
      </div>
      {step === 1 && (
        <form action="">
         <div className="form-content">
         <div className='reser-form'>
            <div className='input-boxes'>
              <div className='input-box'>
                <input type="text" placeholder="Selectionnez l'origine" value={origine} onChange={(e) => setOrigine(e.target.value)}  required/>
              </div>
              <div className='input-box'>
                <input type="text" placeholder='Selectionnez destination' value={destination} onChange={(e) => setDestination(e.target.value)}  required/>
              </div>
              <div className='input-box'>
              <input type="text" placeholder="Date Depart" value={depart} onChange={(e) => setDepart(e.target.value)}  onFocus={(e) => e.currentTarget.type = "date"} onBlur={(e) => e.currentTarget.type = "text"} />
              </div>
              <div className=' input-box'>
              <input type="text" placeholder="Date Retour" value={retour} onChange={(e) => setRetour(e.target.value)}  onFocus={(e) => e.currentTarget.type = "date"} onBlur={(e) => e.currentTarget.type = "text"} />
              </div>
              <div className='button input-box'>
                <input type="button" onClick={handleNext} style={{ marginLeft:'70%' }} value='SUIVANT >'/>
              </div>
            </div>
          </div>
          <div className='cover'>  
               <img src={ticket} alt="" />
          </div>
         </div>
        </form>
        
      )}
      {step === 2 && (
        <form action="">
         <div className="form-content">
         <div className='reser-form'>
            <div className='input-boxes'>
              <div className='input-box'>
                <label> 
                  <select value={classe} onChange={(e) => setClasse(e.target.value)} style={{   width: '370px',color:'#6e6e6e' }}>
                  <option value="">-- Selectionnez Classe --</option>
                    <option value="economy">Economique</option>
                    <option value="business">Affaires</option>
                    <option value="first">Première classe</option>
                 </select>
                </label>
                </div>
              
                <div className='input-box'>
                <label>
                  <select  value={passager} onChange={(e) => setPassagers(e.target.value)} style={{   width: '370px' ,color:'#6e6e6e'}}>
                  <option value="">-- Selectionnez Passagers --</option>

                    <option value="ADULTES">ADULTES</option>
                    <option value="ENFANTS">ENFANTS</option>
                    <option value="BEBES">BEBES</option>
                 </select>
                </label>
                
                </div>
                <div className='input-box'>
                  <input type="text" placeholder="CODE DE REDUCTION" value={reduction} onChange={(e) => setReduction(e.target.value)} required/>
                </div>
              <div className='button input-box'>
              <input type="button"  onClick={handlePrev} className='' style={{ marginLeft:'0' }}  value='< PRECEDENT'/>
      
                <input type="button"  onClick={handleNext} className='' value='SUIVANT >'/>
              </div>
            </div>
          </div>
          <div className='cover'>  
               <img src={ticket} alt="" />
          </div>
         </div>
        </form>
      )}
      {step === 3 && (
        <form action="">
        <div className="form-content">
        <div className='reser-form'>
          
           <div className='tittle2'>MODE DE PAIMENT : </div>
           <div className='input-boxes'>
             <div className='input-box1'>
               <input type="radio" name='paiment' value='carteBancarire' checked={modePay === 'carteBancarire'} onChange={(e) => setModepay(e.target.value)} required/>&nbsp;&nbsp;&nbsp; CARTE BANCAIRE
             </div>
             <div className='input-box1'>
               <input type="radio"  name='paiment' value='carteInternationale' checked={modePay === 'carteInternationale'} onChange={(e) => setModepay(e.target.value)} required/>&nbsp;&nbsp;&nbsp;CARTE BANCAIRE INTERNATIONALE
             </div>
             
             <div className='input-box1'>
               <input type="radio"  name='paiment' value='paimentespeces' checked={modePay === 'paimentespeces'} onChange={(e) => setModepay(e.target.value)} required/>&nbsp;&nbsp;&nbsp;PAIMENT EN ESPECES
             </div>
             
             <div className='button input-box'>
             <input type="button" onClick={handlePrev}  className='' style={{ marginLeft:'0' }}  value='< PRECEDENT'/>
     
               <input type="submit"  onClick={handleSubmit} className='' value='RESERVER'/>
             </div>
           </div>
         </div>
         <div className='cover'>  
              <img src={ticket} alt="" />
         </div>
        </div>
       </form>
      )}
 {/*  <PremiereStep/>
  <DeuxiemeStep/>
  <TroisiemeStep/> */}

    </div>
    </div>

    </div>

  )
}


