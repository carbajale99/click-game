import React from 'react'
import '../styles/SecretCover.css'
import ActivateButton from './ActivateButton';


function SecretCover(props) {
  return (
    <div className='secret-main'>
        <ActivateButton activated={props.activated} click={props.handleClick} ></ActivateButton>
        <div className='secret-corner'></div>
        {/* <div className='secret-cover'></div> */}
    </div>
  )
}

export default SecretCover