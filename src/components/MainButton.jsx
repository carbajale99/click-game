import React from 'react'
import '../styles/MainButton.css'

function changePosition (){

  const phrases = ["Over Here", "Nope", "Try Again", "Click Here", "Get Good", "So Sad", "Rough"];
  var phrasesChoice = (Math.floor(Math.random() * phrases.length));
  document.getElementById("main-button-text").innerHTML = phrases[phrasesChoice];


  var randTop = (Math.floor(Math.random() * 90));
  var randLeft = (Math.floor(Math.random() * 90));

  document.getElementById("main-button").style.top = randTop + "vh";
  document.getElementById("main-button").style.left = randLeft + "vw";
};

function MainButton() {
  return (
    <div className='main-button' id='main-button' onMouseOver={changePosition}>
      <div className='main-button-text' id='main-button-text'>Click Me</div>
    </div>
  )
}

export default MainButton