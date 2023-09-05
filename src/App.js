import './App.css';
import React from 'react';
import ActivateButton from './components/ActivateButton';
import MainButton from './components/MainButton';


function App() {

  const [activated, setActivated] = React.useState(true);

  return (
    <div className="App">
      <ActivateButton activated={activated} handleClick={() => {setActivated(false)}}></ActivateButton>
      <MainButton activated={activated}></MainButton>
    </div>
  );
}

export default App;
