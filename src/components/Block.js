import React from 'react';
import Activity from './Activity';
import styles from './Block.css';


function Block(props) {
  const block = props.blockState;

  const currentActivities = props.activitiesState;
  // console.log(currentActivities + ' block');
  

  return (
    <div className={styles.blockContainer}>
      <h1>{block.blockName}</h1>

      <div className={styles.block}>
        {currentActivities.map((activity) => 
          <Activity activity={props.activity} key={activity.activityId}  name={activity.activityName} description={activity.description} duration={activity.duration * block.timeUnitInMin} color={activity.color} height={activity.duration * 15 }/>)}
      </div>

    </div>
  );
}

export default Block;
