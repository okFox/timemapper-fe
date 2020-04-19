
// import Activities from './Activities';
import React, { useState } from 'react';
import Block from './Block';
import ActivityForm from './ActivityForm';
import './App.css';

const blockData = {

  userId: 'user1',
  blockName: 'Learn Japanese',
  timeUnitInMin: 15

};


const someActivities = {
  activities: [
    {
      activityID: 100,
      activityName: 'Wani Kani',
      duration: 3,
      color: 'rgba(255, 0, 0, 0.2)',
      description: 'Complete Wani Kani levels.',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID: 200,
      activityName: 'Glossika',
      duration: 2,
      color: 'rgba(0, 255, 0, 0.3)',
      description: 'Listen to Glossika sentences',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID: 300,
      activityName: 'Kanji',
      duration: 1,
      color: 'rgba(0, 0, 255, 0.3)',
      description: 'Practice writing basic 100',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } }
  ]
};

// const blockContext = React.createContext({ blockData });

export default function App() {
  const [blockState, setBlockState] = useState({blockData});
  const [activitiesState, setActivitiesState] = useState([someActivities]);
  
  return (
    <>
      <ActivityForm />
      <Block blockState={blockState} activitiesState={activitiesState}/>
    </>
  );
}

//activity list
//block list
