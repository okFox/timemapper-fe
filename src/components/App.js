
// import Activities from './Activities';
import React, { useState } from 'react';
import Block from './Block';
import ActivityForm from './ActivityForm';
import './App.css';



// const blockContext = React.createContext({ blockData });

export default function App() {

  
  return (
    <>
      <ActivityForm />
      <Block />
    </>
  );
}

//activity list
//block list
