import './App.css';
import React from 'react';
import MainButton from './components/MainButton';
import SecretCover from './components/SecretCover';
import Celebration from './components/Celebration';


function App() {

  const [activated, setActivated] = React.useState(true);

  return (
    <div className="App">
      <SecretCover activated={activated} handleClick={() => {setActivated(false)}}></SecretCover>
      <MainButton activated={activated}></MainButton>
      <Celebration></Celebration>
    </div>
  );
}

export default App;
