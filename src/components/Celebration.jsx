import React from 'react'
import confetti from '../confetti.png'
import '../styles/Celebration.css'


function Celebration() {
  return (
    <div className='confetti-main'>
        <div className='confetti-row'>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf1'/>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf2'/>
        </div>
        <div className='confetti-row'>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf3'/>
            <img src={confetti} alt="confetti" className='confetti-img' id='conf4'/>
        </div>
        <div className='congrats-text'>Congrats. You win ig. You don't really get anything tho tehe.</div>
    </div>
  );
}

export default Celebration