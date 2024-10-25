import React from 'react';
import ShoeType from './Components/ShoeType.components';
import ShoeDetails from './Components/ShoeDetails.components';

function App() {
  return (
    <div className="App">
      <ShoeDetails price={2000} size={39}/>
      <ShoeType type={"45,95"}/>

    </div>
  );
}

export default App;
