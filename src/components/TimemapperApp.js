import React, { useState } from 'react';
import ActivityForm from './ActivityForm';
import Activity from './Activity';
import styles from './TimemapperApp.css';
import blockStyles from './Block.css';
import Activities from './Activities';

const blockData = {

  userId: 'user1',
  blockName: 'Learn Japanese',
  timeUnitInMin: 15,
  hours: 2,
  totalMin: 120

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




function TimemapperApp() {
  const [blockState, setBlockState] = useState(blockData);
  const [activitiesState, setActivitiesState] = useState(someActivities);

  const handleActivityFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newActivity = {
      activityName: formData.get('activityName'),
      duration: formData.get('duration'),
      color: 'rgba(255, 0, 0, 0.2)',
      description: formData.get('description'),
      position: {
        x: 5,
        y: 10
      } };

    fetch('/api/v1/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newActivity)
    })
      .then(res => res.json());

    //now fetch entire activities array, set to state,  and render to activities list

  };


  return (
    <div className={styles.grid}>
      <section className={styles.formBox}>
        <ActivityForm handleActivityFormSubmit={handleActivityFormSubmit}/>
      </section>

      <section className={styles.activityListBox}>
        <Activities activitiesState={activitiesState} setActivitiesState={setActivitiesState}/>
      </section>

      <section className={blockStyles.blockContainer}>
        <h1>{blockState.blockName}</h1>
        <div className={blockStyles.block}>
          {activitiesState.activities.map((activity) => 
            <Activity activity={activity} key={activity.activityId}  name={activity.activityName} description={activity.description} duration={activity.duration * blockState.timeUnitInMin} color={activity.color} height={activity.duration * 15 }/>)}
        </div>
      </section>

      <section className={styles.blockListBox}>
            LIST OF BLOCKS
      </section>
    </div>
  );
}

export default TimemapperApp;
