import React, { useState } from 'react';
import './Reservation.css'
function StepOne({ onNext }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ firstName, lastName });
  };

  return (
    <div className='backgroundss'>
    <div className='my-5 py-3  c3  '>
<h1 className='title'>RESERVER </h1>
    <form onSubmit={handleSubmit}>
      <label>
        Prénom :
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Nom :
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <button type="submit">Suivant</button>
    </form>
    </div>
    </div>
  );
}

function StepTwo({ onNext }) {
  const [email, setEmail] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ email, flightNumber });
  };

  return (
  <div className='my-5 py-3  c3  '>
  <h1 className='title'>RESERVER </h1>

    <form onSubmit={handleSubmit}>
      <label>
        Email :
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Numéro de vol :
        <input type="text" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
      </label>
      <button type="submit">Suivant</button>
    </form>
    </div>
  );
}

function StepThree({ onSubmit }) {
  const [seatNumber, setSeatNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ seatNumber });
  };

  return (
    <div className='my-5 py-3  c3  '>
<h1 className='title'>RESERVER </h1>
    <form onSubmit={handleSubmit}>
      <label>
        Numéro de siège :
        <input type="text" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
      </label>
      <button type="submit">Réserver</button>
    </form>
    </div>
  );
}

function ReservationForm() {
  const [step, setStep] = useState(1);
  const [reservationData, setReservationData] = useState({});

  const handleNext = (data) => {
    setReservationData({ ...reservationData, ...data });
    setStep(step + 1);
  };

  const handleSubmit = (data) => {
    setReservationData({ ...reservationData, ...data });
    // Envoyer les données de réservation à l'API ou traiter les données localement
  };

  switch (step) {
    case 1:
      return <StepOne onNext={handleNext} />;
    case 2:
      return <StepTwo onNext={handleNext} />;
    case 3:
      return <StepThree onSubmit={handleSubmit} />;
    default:
      return null;
  }
}

export default ReservationForm; 