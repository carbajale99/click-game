import './App.css';
import React from 'react';
import boom from './media/vine-boom.mp3'
import MainButton from './components/MainButton';
import SecretCover from './components/SecretCover';
import Celebration from './components/Celebration';


function App() {

  const [activated, setActivated] = React.useState(true);
  const [scale, setScale] = React.useState(0);
  let vine_boom = new Audio(boom);

  return (
    <div className="App">
      <SecretCover activated={activated} handleClick={() => {setActivated(false);}}></SecretCover>
      <MainButton activated={activated} handleClick={() => {setScale(1);vine_boom.play();}}></MainButton>
      <Celebration scale={scale}></Celebration>
    </div>
  );
}

export default App;
