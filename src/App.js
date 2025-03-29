import './App.css';
import AddMobile from './addMobile';
import React from 'react';
import CsvLoad from './csvLoad';
import ImageLoad from './imageUrlLoad';

//<AddMobile/>
//<CsvLoad/>
//<ImageLoad/>
function App() {
  return (
    <div>
      <CsvLoad/>
      <ImageLoad/>
      </div>
  );
}

export default App;
