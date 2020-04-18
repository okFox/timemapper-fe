import React, { useState } from 'react';
import Activity from './Activity';
import styles from './Block.css';

const block = {
  userId: 'user1',
  blockName: 'Japanese',
  timeUnitInMin: 15,
  activities: [
    {
      activityID:'id1',
      activityName: 'Wani Kani',
      duration: 3,
      color: 'rgba1',
      description: 'Complete Wani Kani levels.',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID:'id2',
      activityName: 'Glossika',
      duration: 2,
      color: 'rgba2',
      description: 'Listen to Glossika sentences',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID:'id3',
      activityName: 'Kanji',
      duration: 1,
      color: 'rgba3',
      description: 'Practice writing basic 100',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } }
  ] };

function Block() {
  const [ blockState, setBlockState ] = useState({

      userId: 'user1',
      blockName: 'Japanese',
      timeUnitInMin: 15

  })
  const [ activitiesState, setActivitiesState ] = useState({
    activities: [
      {
        activityID:'id1',
        activityName: 'Wani Kani',
        duration: 3,
        color: 'rgba1',
        description: 'Complete Wani Kani levels.',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } },
      {
        activityID:'id2',
        activityName: 'Glossika',
        duration: 2,
        color: 'rgba2',
        description: 'Listen to Glossika sentences',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } },
      {
        activityID:'id3',
        activityName: 'Kanji',
        duration: 1,
        color: 'rgba3',
        description: 'Practice writing basic 100',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } }
    ]
  });
  


  return (
    <div className={styles.block}>
      {activitiesState.activities.map((activity) => <Activity key={activity.activityId} name={activity.activityName} description={activity.description} duration={activity.duration * blockState.timeUnitInMin} />)}
    </div>
  );
}

export default Block;

{/* // const activities = block.activities.map(activity => (
//   <li key={block.activities.activityID}>
//     <div>
//       <h3>{activity.name}</h3>
//       <a href={repo.url}>{repo.url}</a>
//     </div>
//   </li>
// )); */}