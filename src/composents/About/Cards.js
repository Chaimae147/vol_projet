import React from 'react';
import '../styless.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
function Cards(props) {
  return (
    <div className="card">
    <img src={"imgs/"+props.imageSrc} style={{height:"30vh"}}/>
    <div className="card-content">
      <h3 style={{ marginTop:"8px" }}>{props.title}</h3>
      <p style={{ fontFamily:'century gothic' }}>{props.description}</p>


      
      <a href="/Reservatiom"><button className='booknow'>Réséever   <FontAwesomeIcon icon={faAngleRight} /></button></a>
    </div>
  </div>
  );
}

export default Cards;
