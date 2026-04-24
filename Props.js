import React, { useState } from 'react';

function Car(props){
  return <h1>Hi, I am a {props.brand}!</h1>;
}

function Yes(){
  return "Goal Scored!";
}

function No(){
  return "No Goal!";
}

function Goal(props){
  return (
    <>
      {props.goal ? <Yes /> : <No />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Car brand="BMW" />
      <Car brand="Audi" />
      <Goal goal={true} />
    </div>
  );
}

export default App;