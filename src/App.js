import logo from './logo.svg';
import './App.css';
import Navbar from './composents/navbar/Navbar';
import Homee from './composents/Homee'
import Reservation from './composents/Reservation/Reservation';
import About from './composents/About/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
              <Route path='/' element={<Homee/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Reservatiom' element={<Reservation/>}/>


      </Routes>
      </BrowserRouter>
{/*
<ReservationForm/>
 <Home/>
 */}    </div>
  );
}

export default App;
