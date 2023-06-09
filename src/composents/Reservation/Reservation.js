
import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Reservation.css"
import ticket from './reservation-billet-avion-ligne-appareil-concept-vol-voyage-planification-vacances-ete-illustration_277904-2817.png'
import { useState } from 'react'
import axios from 'axios';
export default function Reservation() {
 /*  const [formData, setFormData] = useState({
    origine: '',
    destination: '',
    dateDepart: '',
    dateRetour: '',
     classe: '',
    passagers:'',
    codereduction: '', 
    //modePaiment: '',

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/ajoutereservation', formData)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
        setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
      });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }; */
   const [step, setStep] = useState(1);
  const [origine, setOrigine] = useState();
  const [destination, setDestination] = useState();
  const [dateDepart, setDepart] = useState();
  const [dateRetour, setRetour] = useState();
  const [classe, setClasse] = useState();
  const [codereduction, setReduction] = useState();
  const [passagers, setPassagers] = useState();
  const [modePaiment, setModepay] = useState();
    
  const[message,setMessage]=useState('');
  const handleNext = () => {
    console.log('tfo')
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  const progress = ((step - 1) / 4) * 100; // Assuming three steps
  const handleInputChange = (e)=>{
    setModepay(e.target.value)
  }
  const ajouterreservation = (e) => {
    e.preventDefault();
    axios.post('//localhost:8000/api/reservations', { origine, destination, dateDepart, dateRetour, classe, passagers,codereduction,modePaiment  })/*, ,modePaiment*/ 
  .then((response) => {
    setMessage(response.data.message);
    setOrigine('');
    setDestination('');
    setDepart('');
    setRetour('');
    setClasse('');
    setPassagers('');
    setReduction('');
   // setModepay('');
  })

  .catch((error) => {
    console.log(error);
    setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
  });
  setOrigine('');
  setDestination('');
  setDepart('');
  setRetour('');
  setClasse('');
  setPassagers('');
  setReduction('');
 // setModepay('');
}


/*value={formData.origine} onChange={handleInputChange}*/
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
        <form action="POST">
         <div className="form-content">
         <div className='reser-form'>
            <div className='input-boxes'>
              <div className='input-box'>
                <input type="text"name='origine' placeholder="Selectionnez l'origine"  value={origine} onChange={(e) => setOrigine(e.target.value)}/>
              </div>
              <div className='input-box'>
                <input type="text" name='destination' placeholder='Selectionnez destination' value={destination} onChange={(e) => setDestination(e.target.value)}/>
              </div>
              <div className='input-box'>
              <input type="text" name='dateDepart' placeholder="Date Depart" value={dateDepart} onChange={(e) => setDepart(e.target.value)}  onFocus={(e) => e.currentTarget.type = "date"} onBlur={(e) => e.currentTarget.type = "text"} />
              </div>
              <div className=' input-box'>
              <input type="text" name='dateRetour' placeholder="Date Retour" value={dateRetour} onChange={(e) => setRetour(e.target.value)}  onFocus={(e) => e.currentTarget.type = "date"} onBlur={(e) => e.currentTarget.type = "text"} />
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
        <form action="POST">
         <div className="form-content">
         <div className='reser-form'>
            <div className='input-boxes'>
              <div className='input-box'>
                <label> 
                  <select name='classe' value={classe} onChange={(e) => setClasse(e.target.value)} style={{   width: '370px',color:'#6e6e6e' }}>
                  <option value="" disabled>-- Selectionnez Classe --</option>
                    <option value="economy">Economique</option>
                    <option value="business">Affaires</option>
                    <option value="first">Première classe</option>
                 </select>
                </label>
                </div>
              
                <div className='input-box'>
                <label>
                  <select name='passagers' value={passagers} onChange={(e) => setPassagers(e.target.value)} style={{   width: '370px' ,color:'#6e6e6e'}}>
                  <option value="" disabled>-- Selectionnez Passagers --</option>

                    <option value="ADULTES">ADULTES</option>
                    <option value="ENFANTS">ENFANTS</option>
                    <option value="BEBES">BEBES</option>
                 </select>
                </label>
                
                </div>
                <div className='input-box'>
                  <input name='codereduction' value={codereduction} onChange={(e) => setReduction(e.target.value)} type="text" placeholder="CODE DE REDUCTION" />
                </div>
                <br />
                <br />
              <div className='button input-box'>
              <input type="button"  onClick={handlePrev} className='' style={{ marginLeft:'0' }}  value='< PRECEDENT'/>
                <input type="button"  onClick={handleNext} className='' value='SUIVANT >'/>
              </div>
            </div>
          </div>
          <div className='cover'>  
               <img className='' src={ticket} alt="" />
          </div>
         </div>
        </form>
      )}
      {step === 3 && (
        <form action="POST">
        <div className="form-content">
        <div className='reser-form'>
          
           <div className='tittle2'>MODE DE PAIMENT : </div>
           <div className='input-boxes'>
             <div className='input-box1'>
               <input type="radio" name='modePaiment' value='carteBancarire' checked={modePaiment === 'carteBancarire'}  onClick={handleInputChange} />&nbsp;&nbsp;&nbsp; CARTE BANCAIRE
             </div>
             <div className='input-box1'>
               <input type="radio"  name='modePaiment' value='carteInternationale' checked={modePaiment === 'carteInternationale'}  onClick={handleInputChange} />&nbsp;&nbsp;&nbsp;CARTE BANCAIRE INTERNATIONALE
             </div>
             
             <div className='input-box1'>
               <input type="radio"  name='modePaiment' value='paimentespeces' checked={modePaiment === 'paimentespeces'}  onClick={handleInputChange}/>&nbsp;&nbsp;&nbsp;PAIMENT EN ESPECES
             </div>
             
             <div className='button input-box'>
             <input type="button" onClick={handlePrev}  className='' style={{ marginLeft:'0' }}  value='< PRECEDENT'/>
     
               <input type="submit"  onClick={ajouterreservation} className='' value='RESERVER'/>
             </div>
           </div>
         </div>
         <div className='cover'>  
              <img className='' src={ticket} alt="" />
         </div>
        </div>
       </form>

      )}
      <div>               {message}
</div>
 {/*  <PremiereStep/>
  <DeuxiemeStep/>
  <TroisiemeStep/> */}

    </div>
    </div>

    </div>

  )
}


