import React from 'react';
import './App.css';

const Display = props =>{
  return (
      <div style={{backgroundColor:"#dedede",border:"1px solid"}}>
        <h1>{props.number}</h1>
      </div>
    );
}

const App = () =>{
  return (
    <Display number={10}/>
  );
}

export default App;
