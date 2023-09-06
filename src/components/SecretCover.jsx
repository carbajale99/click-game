import React from 'react'
import '../styles/SecretCover.css'
import ActivateButton from './ActivateButton';

const reveal = () =>{
  document.getElementById("secret-corner").style.opacity = 0;
  document.getElementById("secret-corner").style.zIndex = -100;

}


function SecretCover(props) {
  return (
    <div className='secret-main'>
        <ActivateButton activated={props.activated} click={props.handleClick} ></ActivateButton>
        <div className='secret-corner' id='secret-corner' onClick={reveal}></div>
    </div>
  )
}

export default SecretCover