import React from 'react'
import confetti from '../media/confetti.png'
import '../styles/Celebration.css'


function Celebration(props) {

  return (
    <div className='confetti-main' id='confetti-main' style={{transform:"scale("+ props.scale+")"}}>
        <div className='confetti-row'>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf1'/>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf2'/>
        </div>
        <div className='confetti-row'>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf3'/>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf4'/>
        </div>
        <div className='congrats-text-container'><p className='congrats-text'>Congrats. You win ig. You don't really get anything tho tehe.</p></div>
    </div>
  );
}

export default Celebration