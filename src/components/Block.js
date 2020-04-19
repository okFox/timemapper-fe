import React, { useState } from 'react';
import Activity from './Activity';
import styles from './Block.css';


function Block() {
  const [blockState, setBlockState] = useState({

    userId: 'user1',
    blockName: 'Learn Japanese',
    timeUnitInMin: 15

  });
  const [activitiesState, setActivitiesState] = useState({
    activities: [
      {
        activityID:'id1',
        activityName: 'Wani Kani',
        duration: 3,
        color: 'rgba(255, 0, 0, 0.2)',
        description: 'Complete Wani Kani levels.',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } },
      {
        activityID:'id2',
        activityName: 'Glossika',
        duration: 2,
        color: 'rgba(0, 255, 0, 0.3)',
        description: 'Listen to Glossika sentences',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } },
      {
        activityID:'id3',
        activityName: 'Kanji',
        duration: 1,
        color: 'rgba(0, 0, 255, 0.3)',
        description: 'Practice writing basic 100',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } }
    ]
  });
  


  return (
    <div className={styles.blockContainer}>
      <h1>{blockState.blockName}</h1>
      <div className={styles.block}>
        {activitiesState.activities.map((activity) => <Activity key={activity.activityName} name={activity.activityName} description={activity.description} duration={activity.duration * blockState.timeUnitInMin} color={activity.color} height={activity.duration * 15 }/>)}
      </div>
    </div>
  );
}

export default Block;
