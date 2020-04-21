import React, { useState, useEffect } from 'react';
import ActivityForm from './ActivityForm';
import Activity from './Activity';
import styles from './TimemapperApp.css';
import blockStyles from './Block.css';
import MiniActivity from './MiniActivity';

const blockData = {

  userId: 'user1',
  blockName: 'Learn Japanese',
  timeUnitInMin: 15,
  hours: 2,
  totalMin: 120

};


function TimemapperApp() {
  const [blockState, setBlockState] = useState(blockData);
  const [activitiesState, setActivitiesState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7890/api/v1/activities')
      .then(res => res.json())
      // .then(res => res.text())
      .then(res => setActivitiesState(res));
  },);



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

    fetch('http://localhost:7890/api/v1/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newActivity)
    })
      .then(res => res.json())
      .then(console.log('activity added'));
    //now fetch entire activities array, set to state,  and render to activities list
  };


  return (
    <div className={styles.grid}>
      <section className={styles.formBox}>
        <ActivityForm handleActivityFormSubmit={handleActivityFormSubmit}/>
      </section>

      <section className={styles.activityListBox}>
        <h1>All Activities:</h1>
        {activitiesState.map((blurb) => 
          <MiniActivity key={blurb._id} name={blurb.activityName} color={blurb.color}/>)}

      </section>

      <section className={blockStyles.blockContainer}>
        <h1>{blockState.blockName}</h1>
        <div className={blockStyles.block}>
          {activitiesState.map((activity) => 
            <Activity activity={activity} key={activity._id}  name={activity.activityName} description={activity.description} duration={activity.duration * blockState.timeUnitInMin} color={activity.color} height={activity.duration * 15 }/>)}
        </div>
      </section>

      <section className={styles.blockListBox}>
            LIST OF BLOCKS
      </section>
    </div>
  );
}

export default TimemapperApp;
