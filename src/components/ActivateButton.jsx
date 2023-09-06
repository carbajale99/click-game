import React from 'react'
import '../styles/ActivateButton.css'



function ActivateButton(props) {
  return (
    <div className='actv-button' id='actv-button' onClick={props.click}>
      <div className='actv-button-text' id='actv-button-text'>Yup</div>
    </div>
  )
}

export default ActivateButton