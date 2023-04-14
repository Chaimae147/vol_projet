import logo from './logo.svg';
import './App.css';
import Navbar from './composents/navbar/Navbar';
import Homee from './composents/Homee'
import Reservation from './composents/Reservation/Reservation';
import ReservationForm from './composents/Reservation/Res';
import About from './composents/About/About'
import Login from './composents/Login/login';
import SignUp from './composents/Login/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Homee/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
{/*         <Route path='/Reservatiom' element={<ReservationForm/>}/>
*/}         <Route path='/Reservatiom' element={<Reservation/>}/>
            <Route path='/login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
{/*
 */}    </div>
  );
}

export default App;
