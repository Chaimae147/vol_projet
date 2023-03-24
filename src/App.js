import logo from './logo.svg';
import './App.css';
import Navbar from './composents/navbar/Navbar';
import Homee from './composents/Homee'
import Reservation from './composents/Reservation/Reservation';
import ReservationForm from './composents/Reservation/ReservationForm';
import About from './composents/About/About'
import Login from './composents/Login/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
              <Route path='/' element={<Homee/>}/>
              <Route path='/About' element={<About/>}/>

{/*               <Route path='/Reservatiom' element={<ReservationForm/>}/>
 */}              <Route path='/Reservatiom' element={<Reservation/>}/>
              <Route path='/login' element={<Login/>}/>
           


      </Routes>
      </BrowserRouter>
{/*
<ReservationForm/>
 <Home/>
 */}    </div>
  );
}

export default App;
