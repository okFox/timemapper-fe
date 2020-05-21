import React, { useState, useEffect } from 'react';
import request from 'superagent';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ActivityForm from './ActivityForm';
import Activity from './Activity';
import styles from './TimemapperApp.css';
import blockStyles from './Block.css';
import MiniActivity from './MiniActivity';
import MiniBlock from './MiniBock';

const blockData = {

  userId: '1',
  blockName: 'Learn Japanese',
  timeUnitInMin: 15,
  hours: 2,
  totalMin: 120

};


function TimemapperApp() {
  const [blockState, setBlockState] = useState(blockData);
  const [activitiesState, setActivitiesState] = useState([]);

  useEffect(() => { 
    request
      .get('https://mytimemapper.herokuapp.com/api/v1/activities')
      .then(res => setActivitiesState(res.body));

  }, []);

  const handleActivityFormSubmit = (event) => {
    event.preventDefault();
 
    const color = document.querySelector('button').style.backgroundColor;
    const formData = new FormData(event.target);

    const newActivity = {
      activityName: formData.get('activityName'),
      duration: formData.get('duration'),
      color: color,
      description: formData.get('description'),
      position: {
        x: 5,
        y: 10
      } };

    request
      .post('https://mytimemapper.herokuapp.com/api/v1/activities')
      .withCredentials()
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(newActivity))
      .then(console.log('activity added'));
  };



  return (
    <div className={styles.grid}>
      <div>
        <section className={styles.formBox}>
          <ActivityForm handleActivityFormSubmit={handleActivityFormSubmit} />
        </section>


      </div>
      <section className={blockStyles.blockContainer}>
        <h1>{blockState.blockName}</h1>
        <div className={blockStyles.block}>
          {activitiesState.map((activity) => 
            <Activity activity={activity} key={activity._id}  name={activity.activityName} description={activity.description} duration={activity.duration} color={activity.color} height={(blockState.totalMin * activity.duration) / 100}/>)}
        </div>
      </section>
      

      <section className={styles.activityListBox}>
        <h1>All Activities</h1>
        {activitiesState.map((blurb) => 
          <MiniActivity key={blurb._id} name={blurb.activityName} color={blurb.color}/>)}
      </section>

      <section className={styles.blockListBox}>
        <h1>My Blocks</h1>
      </section>
      
    </div>
  );

}

export default TimemapperApp;
